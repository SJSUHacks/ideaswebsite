import './TheLabSection.css';

function TheLabSection() {
  return (
    <section className="the-lab-section">
      <h2 className="about-section-title">The Lab</h2>

      <div className="the-lab-image-placeholder">
        <img src="/inside_lab.jpg" alt="Inside the Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      <div className="the-lab-info">
        <p className="the-lab-location">Student Union Building</p>
        <p className="the-lab-hours">MON-THU 10:30 am - 6:30 pm</p>
      </div>

      <p className="the-lab-description">
        Being at the very heart of Silicon Valley, IDEAS Club strives to bring interdisciplinary collaboration and push critical thinkers to uplift their passion projects into real world difference. Whether you're just starting out or making your first MVP, we're here for every step of the journey.
      </p>
    </section>
  );
}

export default TheLabSection;
