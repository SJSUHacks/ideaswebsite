import './HeroSection.css';
import Button from './Button';
import { useReveal } from '../lib/useReveal';

function HeroSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="hero-section" ref={ref}>
      <div className="hero-mesh hero-mesh-1" aria-hidden="true" />
      <div className="hero-mesh hero-mesh-2" aria-hidden="true" />
      <div className={`hero-content reveal ${visible ? 'in' : ''}`}>
        <span className="hero-eyebrow">San José State University</span>
        <h1 className="hero-title">IDEAS</h1>
        <h2 className="hero-who-are-we-heading">Who are we</h2>
        <p className="hero-description">
          IDEAS at San Jose State University was formed to bring together students from different majors and backgrounds to{' '}
          <span className="hero-highlight">share and collaborate</span> on innovative ideas
        </p>
        <Button href="https://forms.gle/mYrip7d6tq4T3nnT7">Join Us</Button>
      </div>
      <div className={`hero-graphic reveal ${visible ? 'in' : ''}`}>
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
