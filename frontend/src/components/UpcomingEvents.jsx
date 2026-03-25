import { useState, useEffect } from 'react';
import './UpcomingEvents.css';
import EventCard from './EventCard';
import { fetchEvents, getUpcomingEvents, groupEventsByMonth } from '../lib/fetchEvents';

const calendarIcon = "https://www.figma.com/api/mcp/asset/3ae456c5-434c-4fe1-badf-091b4a89f77b";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groupedEvents, setGroupedEvents] = useState({});
  const [availableMonths, setAvailableMonths] = useState([]);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  // Get Google Sheets CSV URL from environment variable or use default
  const SHEETS_CSV_URL = import.meta.env.VITE_GOOGLE_SHEETS_CSV_URL || '';

  useEffect(() => {
    async function loadEvents() {
      if (!SHEETS_CSV_URL) {
        setError('Google Sheets URL not configured. Please set VITE_GOOGLE_SHEETS_CSV_URL in .env file.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const allEvents = await fetchEvents(SHEETS_CSV_URL);
        const upcoming = getUpcomingEvents(allEvents);
        const grouped = groupEventsByMonth(upcoming);
        
        setEvents(upcoming);
        setGroupedEvents(grouped);
        
        const months = Object.keys(grouped);
        setAvailableMonths(months);
        setCurrentMonthIndex(0);
        
        setError(null);
      } catch (err) {
        setError('Failed to load events. Please try again later.');
        console.error('Error loading events:', err);
      } finally {
        setLoading(false);
      }
    }

    loadEvents();
  }, [SHEETS_CSV_URL]);

  const handlePreviousMonth = () => {
    setCurrentMonthIndex(prev => Math.max(0, prev - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonthIndex(prev => Math.min(availableMonths.length - 1, prev + 1));
  };

  const currentMonth = availableMonths[currentMonthIndex] || 'No Events';
  const currentMonthEvents = groupedEvents[currentMonth] || [];

  // Loading state
  if (loading) {
    return (
      <section className="upcoming-events-section">
        <div className="container">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <div className="events-content">
            <div className="loading-state">
              <p>Loading events...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="upcoming-events-section">
        <div className="container">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <div className="events-content">
            <div className="error-state">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Empty state
  if (events.length === 0) {
    return (
      <section className="upcoming-events-section">
        <div className="container">
          <h2 className="section-title">UPCOMING EVENTS</h2>
          <div className="events-content">
            <div className="empty-state">
              <p>No upcoming events at this time. Check back soon!</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="upcoming-events-section">
      <div className="container">
        <h2 className="section-title">UPCOMING EVENTS</h2>
        <div className="events-content">
          <div className="events-header">
            <button 
              className="nav-arrow nav-arrow-left" 
              onClick={handlePreviousMonth} 
              aria-label="Previous month"
              disabled={currentMonthIndex === 0}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="current-month">
              <img src={calendarIcon} alt="" className="calendar-icon" />
              <span>{currentMonth}</span>
            </div>
            <button 
              className="nav-arrow nav-arrow-right" 
              onClick={handleNextMonth} 
              aria-label="Next month"
              disabled={currentMonthIndex === availableMonths.length - 1}
            >
              <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <div className="events-list">
            {currentMonthEvents.map((event, index) => (
              <EventCard
                key={`${event.date}-${index}`}
                date={event.dayOfMonth}
                day={event.dayOfWeek}
                title={event.title}
                time={event.timeRange}
                location={event.location}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;


