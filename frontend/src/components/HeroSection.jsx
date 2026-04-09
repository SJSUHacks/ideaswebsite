import './HeroSection.css';
import Button from './Button';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            IDEAS
          </h1>
          <h2 className="hero-who-are-we-heading">Who are we</h2>
          <p className="hero-description">
            IDEAS at San Jose State University was formed to bring together students from different majors and backgrounds to{' '}
            <span className="hero-highlight">share and collaborate</span> on innovative ideas
          </p>
        </div>
        <Button href="https://forms.gle/mYrip7d6tq4T3nnT7">Join Us</Button>
      </div>
      <div className="hero-graphic">
        <img
          src="/ideas-home-team.png"
          alt="IDEAS members and faculty together on stage at San José State University"
          width={1024}
          height={768}
          decoding="async"
        />
      </div>
    </section>
  );
}

export default HeroSection;


