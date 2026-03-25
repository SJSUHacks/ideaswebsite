import './ProgramsSection.css';
import ProgramCard from './ProgramCard';

import sjhacksImage from '../assets/programs/sjhacks.svg';
import svicImage from '../assets/programs/svic.svg';
import svbpcImage from '../assets/programs/svbpc.svg';
import zinnstarterImage from '../assets/programs/zinnstarter.svg';

function ProgramsSection() {
  const programs = [
    {
      image: sjhacksImage,
      title: 'SJHacks',
      description: 'An interdisciplinary hackathon in collaboration with ACM Computer Science Club.',
      date: 'Spring 2026',
      path: '/programs/sjhacks'
    },
    {
      image: svicImage,
      title: 'Silicon Valley Innovation Challenge',
      description: 'Turn passion projects into real-world impact with mentorship and prizes.',
      date: 'Spring 2026',
      path: '/programs/svic'
    },
    {
      image: svbpcImage,
      title: 'Silicon Valley Business Plan Competition',
      description: 'Pitch to investors and compete for $10K.',
      date: 'Spring 2026',
      path: '/programs/svbpc'
    },
    {
      image: zinnstarterImage,
      title: 'Zinnstarter Accelerator Program',
      description: 'Get funding and mentorship from Ray Zinn to launch your startup.',
      date: 'Spring 2026',
      path: '/programs/zinnstarter'
    }
  ];

  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="section-title">PROGRAMS</h2>
        <p className="programs-intro">
          Our 4 annual programs give students the chance to develop ideas, pitch to investors, and gain real-world experience.
        </p>
        <div className="programs-grid">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              image={program.image}
              title={program.title}
              description={program.description}
              date={program.date}
              learnMorePath={program.path}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProgramsSection;


