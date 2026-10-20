/**
 * Fetch and parse events from Google Sheets CSV
 * 
 * IMPORTANT: This uses CSV export, NOT the Google Sheets API
 * - No authentication required
 * - No API keys needed
 * - No Google Cloud setup
 * - Sheet must be publicly viewable
 * 
 * Google Sheets CSV URL format:
 * https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={GID}
 */

/**
 * Parse CSV text into an array of objects.
 * Handles quoted fields containing commas, newlines, and "" escaped quotes.
 * @param {string} csvText - Raw CSV text
 * @returns {Array} Array of row objects
 */
export function parseCSV(csvText) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];

    if (inQuotes) {
      if (char === '"' && csvText[i + 1] === '"') {
        field += '"';
        i++;
      } else if (char === '"') {
        inQuotes = false;
      } else {
        field += char;
      }
    } else if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n' || char === '\r') {
      if (char === '\r' && csvText[i + 1] === '\n') i++;
      row.push(field);
      field = '';
      rows.push(row);
      row = [];
    } else {
      field += char;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  const nonEmpty = rows.filter(r => r.some(v => v.trim() !== ''));
  if (nonEmpty.length < 2) return [];

  const headers = nonEmpty[0].map(h => h.trim());
  return nonEmpty.slice(1).map(values => {
    const record = {};
    headers.forEach((header, index) => {
      record[header] = (values[index] || '').trim();
    });
    return record;
  });
}

/**
 * Format date from YYYY-MM-DD to readable format
 * @param {string} dateString - Date in YYYY-MM-DD format
 * @returns {Object} { dayOfWeek, dayOfMonth, month, year, fullDate }
 */
function formatDate(dateString) {
  if (!dateString) return null;
  
  try {
    const date = new Date(dateString + 'T00:00:00'); // Add time to avoid timezone issues
    if (Number.isNaN(date.getTime())) return null;

    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase();
    const dayOfMonth = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    const fullDate = date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    
    return {
      dayOfWeek,
      dayOfMonth,
      month,
      year,
      fullDate,
      dateObject: date
    };
  } catch (error) {
    console.error('Error formatting date:', dateString, error);
    return null;
  }
}

/**
 * Fetch events from Google Sheets CSV URL
 * @param {string} csvUrl - Google Sheets CSV export URL
 * @returns {Promise<Array>} Array of formatted event objects
 */
export async function fetchEvents(csvUrl) {
  try {
    const response = await fetch(csvUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch events: ${response.status} ${response.statusText}`);
    }
    
    const csvText = await response.text();
    const rawEvents = parseCSV(csvText);
    
    // Transform and format events
    const events = rawEvents
      .map(event => {
        const dateInfo = formatDate(event['Date']);

        if (!dateInfo) {
          console.warn(`Skipping event "${event['Event Title']}": unusable Date value "${event['Date']}"`);
          return null;
        }
        
        return {
          title: event['Event Title'] || 'Untitled Event',
          location: event['Location'] || 'TBA',
          date: event['Date'],
          startTime: event['Start Time'] || '',
          endTime: event['End Time'] || '',
          timeRange: event['Start Time'] && event['End Time']
            ? `${event['Start Time']} - ${event['End Time']}`
            : event['Start Time'] || 'Time TBA',
          description: event['description'] || '',
          rsvp: event['RSVP ?'] || event['RSVP'] || '',
          dayOfWeek: dateInfo.dayOfWeek,
          dayOfMonth: dateInfo.dayOfMonth,
          month: dateInfo.month,
          year: dateInfo.year,
          fullDate: dateInfo.fullDate,
          dateObject: dateInfo.dateObject
        };
      })
      .filter(event => event !== null); // Remove invalid events
    
    // Sort by date (upcoming first)
    events.sort((a, b) => a.dateObject - b.dateObject);
    
    return events;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
}

/**
 * Filter events to show only upcoming events
 * @param {Array} events - Array of event objects
 * @returns {Array} Filtered array of upcoming events
 */
export function getUpcomingEvents(events) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return events.filter(event => event.dateObject >= today);
}

/**
 * Group events by month
 * @param {Array} events - Array of event objects
 * @returns {Object} Events grouped by "Month Year" key
 */
export function groupEventsByMonth(events) {
  const grouped = {};
  
  events.forEach(event => {
    const key = `${event.month} ${event.year}`;
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(event);
  });
  
  return grouped;
}
