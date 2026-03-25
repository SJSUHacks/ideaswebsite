import './EventCard.css';

const clockIcon = "https://www.figma.com/api/mcp/asset/7c3f0714-b00e-4349-b033-22553c10967d";
const locationIcon = "https://www.figma.com/api/mcp/asset/7031c937-01dc-4965-9e3a-47acd83a2a81";

function EventCard({ date, day, title, time, location, onClick }) {
  return (
    <div className="event-card" onClick={onClick}>
      <a className="event-card-link">
        <div className="event-date">
          <div className="event-day">{day}</div>
          <div className="event-number">{date}</div>
        </div>
        <div className="event-main">
          <div className="event-content">
            <h3 className="event-title">{title}</h3>
            <div className="event-details">
              <div className="event-detail">
                <img src={clockIcon} alt="" className="event-icon" />
                <span className="event-time">{time}</span>
              </div>
              <div className="event-detail">
                <img src={locationIcon} alt="" className="event-icon" />
                <span className="event-location">{location}</span>
              </div>
            </div>
          </div>
          <div className="event-arrow">
            <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6.5L1 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}

export default EventCard;


