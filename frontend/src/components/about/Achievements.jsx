import './Achievements.css';

function Achievements() {
  const achievements = [
    'Established Zinnstarter Program in 2018',
    'Established SiliconXHacks in 2024',
    'Co-Founded SJHacks with ACM Computer Science Club'
  ];

  return (
    <section className="achievements">
      <h2 className="about-section-title">Achievements</h2>
      <ul className="achievements-list">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievements-item">{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
