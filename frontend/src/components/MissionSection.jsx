import './MissionSection.css';
import Button from './Button';
import { useReveal } from '../lib/useReveal';

function MissionSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="mission-section" ref={ref}>
      <div className="mission-divider" />
      <div className={`mission-container reveal ${visible ? 'in' : ''}`}>
        <h2 className="section-title">OUR MISSION</h2>
        <div className="mission-content">
          <p className="mission-text">
            Being at the very heart of Silicon Valley, IDEAS Club strives to bring interdisciplinary collaboration and push{' '}
            <span className="mission-highlight">critical thinkers</span> to uplift their passion projects into{' '}
            <span className="mission-highlight">real world difference.</span> Whether you're just starting out or making your first MVP, we're here for every step of the journey.
          </p>
          <p className="mission-cta-text">Find out more about our history and achievements!</p>
          <Button to="/mission">Learn more</Button>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;


