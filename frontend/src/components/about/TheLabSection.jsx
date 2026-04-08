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
        <p className="the-lab-hours">MON-THU 11:30 am - 6:30 pm</p>
      </div>

      <p className="the-lab-description">
        This is where members drop in to work, host small builds, and connect with others who care about shipping ideas—not just talking about them. Bring your laptop, your hardware, or your questions; the lab is here for focused work and collaboration throughout the week.
      </p>
    </section>
  );
}

export default TheLabSection;
