import './AboutIntro.css';

function AboutIntro() {
  return (
    <section className="about-intro">
      <h2 className="about-section-title">About</h2>
      <div className="about-intro-image-placeholder">
        <img src="/ideaslab.jpg" alt="IDEAS Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p className="about-intro-description">
        Being at the very heart of Silicon Valley, IDEAS Club strives to bring interdisciplinary collaboration and push critical thinkers to uplift their passion projects into real world difference. Whether you're just starting out or making your first MVP, we're here for every step of the journey.
      </p>
    </section>
  );
}

export default AboutIntro;
