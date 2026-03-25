# Google Sheets Events System - Quick Setup Guide

This document provides a quick reference for setting up and managing the Google Sheets-powered events system.

## ⚡ Important: No API Credentials Required!

This system uses the **CSV export URL** from a publicly shared Google Sheet, NOT the Google Sheets API. This means:

✅ **No authentication needed**  
✅ **No API keys or credentials**  
✅ **No Google Cloud setup**  
✅ **No OAuth or service accounts**  
✅ **No API quotas or rate limits**  

Simply make your sheet public and use the CSV export URL. That's it!

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new sheet
3. Add these **exact column headers** in row 1:
   ```
   Event Title | Location | Date | Start Time | End Time
   ```

### Step 2: Add Sample Data

Add a few events to test (use future dates):

| Event Title | Location | Date | Start Time | End Time |
|-------------|----------|------|------------|----------|
| Workshop: Intro to Startups | Student Union 123 | 2026-01-20 | 6:00 PM | 8:00 PM |
| Pitch Competition | Engineering Bldg | 2026-02-15 | 5:00 PM | 7:00 PM |

**Important:** Date format MUST be `YYYY-MM-DD`

### Step 3: Make Sheet Public

1. Click **Share** (top-right corner)
2. Click **Change to anyone with the link**
3. Set to **Viewer**
4. Click **Done**

### Step 4: Get CSV URL

1. Look at your sheet URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz/edit#gid=0
   ```

2. Extract the `SHEET_ID` (1ABC123xyz) and `GID` (0)

3. Create CSV export URL:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz/export?format=csv&gid=0
   ```

### Step 5: Configure Frontend

1. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

2. Create `.env` file (if it doesn't exist):
   ```bash
   cp .env.example .env
   ```

3. Edit `.env` and add your CSV URL:
   ```env
   VITE_GOOGLE_SHEETS_CSV_URL=https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/export?format=csv&gid=YOUR_GID
   ```

4. Restart dev server:
   ```bash
   npm run dev
   ```

---

## 📋 Google Sheet Template

Use this template structure:

### Required Columns (Exact Names)

| Column Name | Format | Example | Required |
|-------------|--------|---------|----------|
| Event Title | Text | "Workshop: Intro to Startups" | Yes |
| Location | Text | "Student Union 123" | Yes |
| Date | YYYY-MM-DD | "2026-01-20" | Yes |
| Start Time | Text | "6:00 PM" | Yes |
| End Time | Text | "8:00 PM" | Yes |

### Example Sheet

```
Event Title                              | Location              | Date       | Start Time | End Time
Taking the leap into Entrepreneurship    | Student Union Theatre | 2026-01-15 | 6:00 PM    | 7:00 PM
Design Thinking Workshop                 | IDEAS Lab             | 2026-01-22 | 5:00 PM    | 7:00 PM
Pitch Practice Session                   | Engineering 189       | 2026-02-05 | 4:00 PM    | 6:00 PM
Networking Mixer                         | Student Union         | 2026-02-12 | 6:00 PM    | 8:00 PM
```

---

## 🎯 How It Works

### Data Flow

```
Google Sheets (Public) → CSV Export URL → Frontend Fetch (No Auth) → Parse & Format → Display
```

### Technical Details

**Why No Credentials Are Needed:**

When you make a Google Sheet publicly viewable, Google automatically provides a CSV export endpoint. This is NOT the Google Sheets API - it's a simple HTTP endpoint that returns CSV data.

**What Happens:**
1. Your Google Sheet is public (Viewer permission)
2. Google generates a CSV export URL: `https://docs.google.com/spreadsheets/d/{SHEET_ID}/export?format=csv&gid={GID}`
3. Frontend makes a simple `fetch()` request (just like loading any other file)
4. No authentication headers, no API keys, no OAuth tokens
5. Google returns plain CSV text
6. Frontend parses it and displays events

**Comparison:**

| Approach | Auth Required | Setup Complexity | API Limits | Best For |
|----------|---------------|------------------|------------|----------|
| **CSV Export** (Our approach) | ❌ No | ✅ Simple | ❌ None | Public data, simple updates |
| Google Sheets API | ✅ Yes | ❌ Complex | ✅ Yes | Private data, complex operations |

**Security Note:** The sheet must be public for this to work. If you need private data access, you would need to use the official Google Sheets API with proper authentication.

### Features

1. **Auto-Filtering**: Only shows upcoming events (past events hidden)
2. **Auto-Sorting**: Events sorted by date (earliest first)
3. **Month Grouping**: Events grouped by month for easy navigation
4. **Real-Time Updates**: Changes to Google Sheet reflect on website (may take a few minutes)

### Event Display Logic

- Events with dates **before today** → Hidden
- Events with dates **today or later** → Shown
- Events sorted by date (ascending)
- Grouped by month (e.g., "Jan 2026", "Feb 2026")
- Month navigation with arrow buttons

---

## 🛠️ Managing Events

### Adding New Events

1. Open your Google Sheet
2. Add a new row with event details
3. **Important:** Use `YYYY-MM-DD` format for dates
4. Save (auto-saves in Google Sheets)
5. Refresh website to see changes

### Editing Events

1. Find the event row in Google Sheet
2. Edit the details
3. Save
4. Refresh website

### Removing Events

**Option 1:** Delete the row (permanent)
**Option 2:** Change date to past date (will auto-hide)

---

## 🐛 Troubleshooting

### Events Not Showing Up

**Problem:** Website shows "No upcoming events"

**Solutions:**
1. ✅ Check Google Sheet is **publicly accessible**
   - Share → Anyone with link → Viewer
2. ✅ Verify `.env` file has correct CSV URL
3. ✅ Check date format is `YYYY-MM-DD` (not MM/DD/YYYY)
4. ✅ Ensure dates are in the **future**
5. ✅ Check all required columns exist with exact names
6. ✅ Restart dev server after changing `.env`

### Error Message Displayed

**Problem:** Website shows error message

**Solutions:**
1. ✅ Open browser console (F12) to see detailed error
2. ✅ Verify CSV URL is accessible (paste in browser)
3. ✅ Check Google Sheet permissions
4. ✅ Ensure `.env` file exists in `frontend/` directory

### Wrong Data Displayed

**Problem:** Events show incorrect information

**Solutions:**
1. ✅ Check column names match exactly (case-sensitive)
2. ✅ Verify no extra spaces in column headers
3. ✅ Check date format is correct
4. ✅ Clear browser cache and refresh

---

## 📝 Date Format Examples

### ✅ Correct Formats

```
2026-01-15
2026-12-31
2026-03-05
```

### ❌ Incorrect Formats

```
01/15/2026  ← Wrong (US format)
15-01-2026  ← Wrong (Day first)
Jan 15 2026 ← Wrong (Text month)
1/15/26     ← Wrong (Short year)
```

---

## 🔧 Advanced Configuration

### Multiple Event Sheets

To use different sheets (e.g., separate tabs for different event types):

1. Get the `gid` for each tab from the URL
2. Create separate CSV URLs for each tab
3. Modify `UpcomingEvents.jsx` to fetch from multiple sources

### Custom Filtering

To show all events (not just upcoming):

In `UpcomingEvents.jsx`, replace:
```javascript
const upcoming = getUpcomingEvents(allEvents);
```

With:
```javascript
const upcoming = allEvents; // Show all events
```

### Custom Sorting

To sort by title instead of date:

In `fetchEvents.js`, replace:
```javascript
events.sort((a, b) => a.dateObject - b.dateObject);
```

With:
```javascript
events.sort((a, b) => a.title.localeCompare(b.title));
```

---

## 📚 File Reference

### Created Files

| File | Purpose |
|------|---------|
| `src/lib/fetchEvents.js` | Fetch and parse Google Sheets CSV |
| `frontend/.env` | Environment variables (CSV URL) |
| `frontend/.env.example` | Example environment file |

### Modified Files

| File | Changes |
|------|---------|
| `src/components/UpcomingEvents.jsx` | Updated to fetch real data |
| `src/components/UpcomingEvents.css` | Added loading/error states |
| `frontend/README.md` | Added setup instructions |

---

## 🎓 For Team Members

### Updating Events (Non-Technical)

1. Open the Google Sheet (bookmark it!)
2. Add/edit event details
3. Use date format: `YYYY-MM-DD` (e.g., `2026-01-20`)
4. Save (auto-saves)
5. Wait 1-2 minutes, then refresh website

### Best Practices

- ✅ Add events at least 1 week in advance
- ✅ Use consistent location names
- ✅ Include AM/PM in times
- ✅ Double-check dates before saving
- ✅ Test by viewing the website after adding

---

## ❓ Frequently Asked Questions

### Do I need Google Sheets API credentials?

**No!** This system does NOT use the Google Sheets API. It uses a public CSV export URL that requires no authentication.

### Do I need to set up a Google Cloud project?

**No!** No Google Cloud setup is required. Just make your sheet public and use the CSV export URL.

### Will this cost money?

**No!** There are no API calls, so there are no charges. The CSV export is free.

### Is the data secure? Can anyone edit my sheet?

The sheet is **view-only** for the public. Only people with edit access (you and your team) can modify it. The website only reads the data via CSV export.

### How often does the website update with new events?

Changes appear almost immediately (within seconds). However, browser caching might delay updates. Users can refresh the page to see latest data.

### Can I use a private Google Sheet?

**No, not with this approach.** The CSV export URL only works for public sheets. If you need private data, you would need to implement the official Google Sheets API with OAuth authentication (much more complex).

### What if I want to use the Google Sheets API instead?

You can migrate to the API, but it requires:
- Google Cloud Project setup
- OAuth 2.0 credentials
- API enablement in Google Cloud Console
- Service account or user authentication
- Handling API rate limits

For most use cases (public events), the CSV export approach is simpler and sufficient.

### Does this work with Excel or other spreadsheet tools?

This is specific to Google Sheets CSV export. However, you could:
- Export Excel to CSV and host it somewhere
- Use Airtable (which also provides CSV export)
- Use any service that provides a public CSV URL

---

## 📞 Support

If you encounter issues:

1. Check this guide's troubleshooting section
2. Check browser console for errors (F12)
3. Verify Google Sheet is accessible (try opening CSV URL in browser)
4. Contact the development team with:
   - Error message (if any)
   - Screenshot of Google Sheet
   - Screenshot of browser console
   - The CSV URL you're using (from `.env` file)

---

## ✅ Checklist

Before going live, verify:

- [ ] Google Sheet created with correct columns
- [ ] Google Sheet is publicly accessible (Viewer permission)
- [ ] CSV URL is correct in `.env` file
- [ ] At least 2-3 sample events added
- [ ] Dates are in `YYYY-MM-DD` format
- [ ] Events display correctly on website
- [ ] Month navigation works
- [ ] Loading state appears briefly
- [ ] No console errors in browser

---

**Last Updated:** January 2026  
**System Version:** 1.0  
**Maintained By:** IDEAS Club Development Team
