import { useState } from 'react';
import './TeamSection.css';

const departmentDescriptions = {
  'Marketing': 'Our Marketing department is the creative force behind our brand. They craft compelling campaigns, manage our social media presence, and connect us with our audience to share our vision.',
  'Events': 'The Events team brings our community together. From intimate workshops to large-scale conferences, they meticulously plan and execute memorable experiences that foster learning and networking.',
  'Finance': 'Our Finance department ensures our organization\'s sustainability. They manage budgets, secure funding, and provide the strategic financial planning necessary to fuel our growth and initiatives.',
  'Web-Dev': 'The Web-Dev team builds the digital foundation of our club. They design, develop, and maintain our platforms, turning innovative ideas into robust, user-friendly applications.'
};

const departments = ['Marketing', 'Events', 'Finance', 'Web-Dev'];

function TeamSection() {
  const [activeTab, setActiveTab] = useState('Marketing');

  return (
    <section className="team-section">
      <h2 className="about-section-title">Our Departments</h2>

      <div className="team-tabs">
        {departments.map((dept) => (
          <button
            key={dept}
            className={`team-tab ${activeTab === dept ? 'active' : ''}`}
            onClick={() => setActiveTab(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      <div className="department-description-container">
        <p key={activeTab} className="department-description-text fade-in">
          {departmentDescriptions[activeTab]}
        </p>
      </div>

      <p className="team-hiring-note">Hiring for next year starts May 2026</p>
    </section>
  );
}

export default TeamSection;
