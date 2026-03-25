# Google Sheets Event System — Implementation Plan (Claude Code)

This document outlines a phased plan for implementing a Google Sheets–powered event system.

---

## Phase 1: Google Sheet Setup

**Goal:** Define and document the required Google Sheets structure.

### Tasks
- Create an example Google Sheet structure (documented in the README)
- Define required columns:
  - **Event Title**
  - **Location**
  - **Date**
  - **Start Time**
  - **End Time**
- Provide example data formats for each column
- Add instructions for:
  - Making the Google Sheet public
  - Obtaining the CSV export URL

---

## Phase 2: Backend / Fetch Logic

**Goal:** Fetch and normalize event data from Google Sheets.

### Tasks
- Create an events fetching utility  
  - Example path: `lib/fetchEvents.js`
- Implement:
  - Function to fetch CSV data from the Google Sheets URL
  - CSV parser to convert raw CSV text into an array of event objects
  - Date formatter to convert `YYYY-MM-DD` → `Wed, Jan 14`
  - Error handling for failed fetches or invalid CSV
  - Sorting logic to order events by date (upcoming first)

---

## Phase 3: Frontend Integration

**Goal:** Display events in the UI.

### Events Component
- Create an `Events` component  
  - Example path: `components/Events.jsx`
- Display events in a card or list format
- Show the following fields:
  - Event title
  - Formatted date
  - Location
  - Start–end time
- Handle:
  - Loading state
  - Empty state (no upcoming events)
  - Optional toggle: show only upcoming events or all events

### Add to Main Page
- Import and render the `Events` component
- Decide placement:
  - Hero section
  - Dedicated events section
  - Other appropriate layout area

---

## Phase 4: Styling

**Goal:** Create a clean, modern, responsive UI.

### Tasks
- Style the events display with:
  - Mobile-friendly responsive design
  - Clean, modern card layout
  - Clear visual hierarchy:
    - Title as the most prominent element
    - Details as secondary information
- Optional enhancements:
  - Icons for date, location, and time

---

## Phase 5: Configuration

**Goal:** Make the system configurable and easy to maintain.

### Environment Setup
- Add a `.env` file to store the Google Sheets CSV URL
- Read the URL from environment variables
- Document in the README:
  - How to update the Google Sheets URL
  - Any required environment variables

---

## Technical Requirements

- **Next.js**
  - Use server-side fetching or an API route
- **React**
  - Use `useEffect` with `fetch`
- **Vanilla JavaScript**
  - Fetch data on page load
