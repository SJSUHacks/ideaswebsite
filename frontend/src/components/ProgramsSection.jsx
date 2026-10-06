import './ProgramsSection.css';
import Button from './Button';
import { useReveal } from '../lib/useReveal';

import sjhacksImage from '../assets/programs/sjhacks.svg';
import svicImage from '../assets/programs/svic.svg';
import svbpcImage from '../assets/programs/svbpc.svg';
import zinnstarterImage from '../assets/programs/zinnstarter.svg';

const programs = [
  {
    image: sjhacksImage,
    title: 'SJHacks',
    description: 'An interdisciplinary hackathon in collaboration with ACM Computer Science Club.',
    date: 'Spring 2026',
    path: '/programs/sjhacks',
    featured: true,
  },
  {
    image: svicImage,
    title: 'Silicon Valley Innovation Challenge',
    description: 'Turn passion projects into real-world impact with mentorship and prizes.',
    date: 'Spring 2026',
    path: '/programs/svic',
  },
  {
    image: svbpcImage,
    title: 'Silicon Valley Business Plan Competition',
    description: 'Pitch to investors and compete for $10K.',
    date: 'Spring 2026',
    path: '/programs/svbpc',
  },
  {
    image: zinnstarterImage,
    title: 'Zinnstarter Accelerator Program',
    description: 'Get funding and mentorship from Ray Zinn to launch your startup.',
    date: 'Spring 2026',
    path: '/programs/zinnstarter',
  },
];

function ProgramsSection() {
  const [ref, visible] = useReveal();

  return (
    <section className="programs-section" ref={ref}>
      <div className={`programs-container reveal ${visible ? 'in' : ''}`}>
        <span className="programs-eyebrow">Programs</span>
        <h2 className="programs-heading">Four ways to build.</h2>
        <p className="programs-intro">
          Our 4 annual programs give students the chance to develop ideas, pitch to investors, and gain real-world experience.
        </p>
        <div className="programs-bento">
          {programs.map(program => (
            <article key={program.title} className={`program-tile ${program.featured ? 'program-tile-featured' : ''}`}>
              <div className="program-tile-logo">
                <img src={program.image} alt={program.title} />
              </div>
              <div className="program-tile-body">
                <h3 className="program-tile-title">{program.title}</h3>
                <p className="program-tile-description">{program.description}</p>
                <div className="program-tile-footer">
                  <span className="program-tile-date">{program.date}</span>
                  <Button variant="secondary" to={program.path}>Learn more</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;
