import { Link } from 'react-router-dom';
import './DetailPage.css';

function SVICPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <span className="detail-badge">SVIC — SILICON VALLEY INNOVATION CHALLENGE</span>
        <h1>Silicon Valley Innovation Challenge</h1>
        <p className="detail-lead">
          Turn passion projects into real-world impact with mentorship and prizes. Spring 2026.
        </p>

        <section>
          <h2>About the Challenge</h2>
          <p>
            The Silicon Valley Innovation Challenge (SVIC) is designed for students who have an idea and the drive to make it real. Unlike traditional competitions that focus only on the pitch, SVIC provides ongoing mentorship, resources, and support to help you develop your project from concept to prototype—and beyond.
          </p>
        </section>

        <section>
          <h2>What You'll Get</h2>
          <ul>
            <li><strong>One-on-one mentorship</strong> — Paired with industry experts and entrepreneurs</li>
            <li><strong>Workshops & resources</strong> — Learn prototyping, business modeling, and pitching</li>
            <li><strong>Prize pool</strong> — Compete for cash prizes and in-kind support</li>
            <li><strong>Exposure</strong> — Present to investors and the broader Silicon Valley community</li>
            <li><strong>Community</strong> — Join a cohort of like-minded innovators</li>
          </ul>
        </section>

        <section>
          <h2>Eligibility & Timeline</h2>
          <p>
            SVIC is open to all SJSU students with a passion project or early-stage idea. The program runs through Spring 2026, with milestones for idea validation, prototype development, and final pitch. Applications open at the start of the semester.
          </p>
        </section>
      </article>
    </div>
  );
}

export default SVICPage;
