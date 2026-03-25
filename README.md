# IDEAS Landing Page

A modern landing page for IDEAS (Innovation, Design, Entrepreneurship, and Startups) at San Jose State University.

## Project Structure

```
src/
├── components/
│   ├── Button.jsx          # Reusable button component
│   ├── EventCard.jsx       # Event card component
│   ├── ProgramCard.jsx      # Program card component
│   ├── HeroSection.jsx     # Hero section with main CTA
│   ├── UpcomingEvents.jsx  # Events section with calendar
│   ├── MissionSection.jsx  # Mission statement section
│   ├── ProgramsSection.jsx # Programs showcase section
│   └── Footer.jsx          # Footer with contact info
├── App.jsx                 # Main app component
└── index.css               # Global styles
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Google Sheets for Events

The events section pulls data from a Google Sheet using **CSV export** (no API credentials required). Follow these steps to set it up:

**Note:** This does NOT use the Google Sheets API. No authentication, API keys, or Google Cloud setup needed!

#### Create Your Google Sheet

1. Create a new Google Sheet or use an existing one
2. Add the following columns (exact names required):
   - **Event Title** - Name of the event
   - **Location** - Where the event takes place
   - **Date** - Date in `YYYY-MM-DD` format (e.g., `2026-01-20`)
   - **Start Time** - Start time (e.g., `6:00 PM`)
   - **End Time** - End time (e.g., `7:00 PM`)

#### Example Google Sheet Structure

| Event Title | Location | Date | Start Time | End Time |
|-------------|----------|------|------------|----------|
| Workshop: Intro to Startups | Student Union 123 | 2026-01-20 | 6:00 PM | 8:00 PM |
| Pitch Competition Finals | Engineering Building | 2026-02-15 | 5:00 PM | 7:00 PM |
| Networking Mixer | IDEAS Lab | 2026-03-10 | 4:00 PM | 6:00 PM |

#### Make the Sheet Public

1. Click **Share** button in the top-right corner
2. Click **Change to anyone with the link**
3. Set permission to **Viewer**
4. Click **Done**

#### Get the CSV Export URL

1. Open your Google Sheet
2. Look at the URL in your browser:
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/edit#gid={GID}
   ```
3. Copy the `SHEET_ID` and `GID` values
4. Construct the CSV export URL:
   ```
   https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={GID}
   ```

**Example:**
- Original URL: `https://docs.google.com/spreadsheets/d/1ABC123xyz/edit#gid=0`
- CSV Export URL: `https://docs.google.com/spreadsheets/d/1ABC123xyz/export?format=csv&gid=0`

### 3. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your Google Sheets CSV URL:
   ```env
   VITE_GOOGLE_SHEETS_CSV_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=YOUR_GID
   ```

3. Save the file

### 4. Run Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5. Build for Production
```bash
npm run build
```

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Modular React components for easy maintenance
- **Modern Styling**: Clean, professional design matching the IDEAS brand
- **Interactive Elements**: Hover effects, transitions, and clickable components
- **Dynamic Events**: Events automatically pulled from Google Sheets
- **Month Navigation**: Browse events by month with arrow navigation
- **Auto-Sorting**: Events automatically sorted by date (upcoming first)

## Sections

1. **Hero Section**: Main title, description, and primary CTA
2. **Upcoming Events**: Dynamic calendar view of upcoming events from Google Sheets
3. **Mission Section**: Club mission statement and values
4. **Programs Section**: Showcase of 4 annual programs
5. **Footer**: Contact information, quick links, and social media

## Managing Events

### Adding New Events

1. Open your Google Sheet
2. Add a new row with event details
3. Ensure the date is in `YYYY-MM-DD` format
4. Save the sheet
5. Events will automatically appear on the website (may take a few minutes to update)

### Event Display Rules

- Only **upcoming events** are shown (past events are automatically hidden)
- Events are **sorted by date** (earliest first)
- Events are **grouped by month** for easy navigation
- Use the arrow buttons to navigate between months

### Troubleshooting Events

**Events not showing up?**
- Check that your Google Sheet is publicly accessible
- Verify the CSV URL in your `.env` file is correct
- Ensure dates are in `YYYY-MM-DD` format
- Check the browser console for error messages

**Events showing "No upcoming events"?**
- Make sure you have events with dates in the future
- Verify the date format is correct (`YYYY-MM-DD`)
- Check that all required columns are present

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GOOGLE_SHEETS_CSV_URL` | Google Sheets CSV export URL for events | Yes |

## Tech Stack

- **React 19.2.0** - UI framework
- **Vite 7.2.4** - Build tool and dev server
- **Plain CSS** - Styling (no preprocessors)
- **Google Sheets** - Event data source
