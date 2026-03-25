import { Link } from 'react-router-dom';
import './DetailPage.css';

function MissionPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <span className="detail-badge">OUR MISSION</span>
        <h1>The IDEAS Club Mission</h1>
        <p className="detail-lead">
          Being at the very heart of Silicon Valley, IDEAS Club strives to bring interdisciplinary collaboration and push critical thinkers to uplift their passion projects into real world difference.
        </p>

        <section>
          <h2>Who We Are</h2>
          <p>
            The Innovation, Design, Engineering, Art, and Science (IDEAS) Club is San Jose State University's premier interdisciplinary organization. We believe that the most groundbreaking ideas happen at the intersection of different fields. 
          </p>
          <p>
            Whether you're an engineering student building hardware, a business major crafting a go-to-market strategy, or a design student perfecting user interfaces, there's a place for you here to collaborate, build, and grow.
          </p>
        </section>

        <section>
          <h2>Our History</h2>
          <p>
            Founded with the vision to bridge the gap between academic theory and Silicon Valley reality, IDEAS Club has grown into a vibrant community of builders, thinkers, and creators. Over the years, we've supported hundreds of student projects, hosted numerous successful hackathons like SJHacks, and facilitated connections with industry leaders across the Bay Area.
          </p>
        </section>

        <section>
          <h2>Achievements & Impact</h2>
          <ul>
            <li><strong>SJHacks:</strong> Successfully organized one of SJSU's largest interdisciplinary hackathons, bringing together hundreds of students.</li>
            <li><strong>Silicon Valley Innovation Challenge (SVIC):</strong> Guided multiple student teams to top placements in the annual SVIC.</li>
            <li><strong>Startup Funding:</strong> Assisted student founders in securing seed capital through the Zinnstarter Accelerator Program.</li>
            <li><strong>Skill Development:</strong> Hosted dozens of workshops spanning UI/UX design, full-stack development, and pitching to investors.</li>
          </ul>
        </section>

        <section>
          <h2>Join the Movement</h2>
          <p>
            We are always looking for passionate individuals who want to turn their ideas into reality. You don't need a finished product or a perfect business plan—just the drive to learn and collaborate. From your first MVP to your final pitch, IDEAS Club is here to support every step of your journey.
          </p>
        </section>
      </article>
    </div>
  );
}

export default MissionPage;
