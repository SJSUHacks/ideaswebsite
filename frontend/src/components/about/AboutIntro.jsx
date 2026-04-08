import './AboutIntro.css';

function AboutIntro() {
  return (
    <section className="about-intro">
      <h2 className="about-section-title">About</h2>
      <div className="about-intro-image-placeholder">
        <img src="/ideaslab.jpg" alt="IDEAS Lab" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p className="about-intro-description">
        IDEAS Lab is our on-campus home for building in the heart of Silicon Valley—a collaborative workspace where students across majors meet, prototype, and learn from one another. We exist to help you turn ideas into something tangible, from your first sketch or side project to a polished MVP, with the community and space to make it real.
      </p>
    </section>
  );
}

export default AboutIntro;
