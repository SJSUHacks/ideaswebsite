import { Link } from 'react-router-dom';
import './DetailPage.css';

function SVBPCPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <span className="detail-badge">SILICON VALLEY BUSINESS PLAN COMPETITION</span>
        <h1>Silicon Valley Business Plan Competition</h1>
        <p className="detail-lead">
          Pitch to investors and compete for $30K. Spring 2026.
        </p>

        <section>
          <h2>About the Competition</h2>
          <p>
            The Silicon Valley Business Plan Competition (SVBPC) is IDEAS Club's premier opportunity for student entrepreneurs ready to take their venture to the next level. With a total prize pool of $30,000, this competition connects you directly with angel investors, venture capitalists, and seasoned entrepreneurs who are actively looking to support the next generation of founders.
          </p>
        </section>

        <section>
          <h2>Competition Structure</h2>
          <ul>
            <li><strong>Written business plan</strong> — Submit a comprehensive plan outlining your venture</li>
            <li><strong>Pitch rounds</strong> — Present to panels of judges and investors</li>
            <li><strong>$30K prize pool</strong> — Cash awards for top teams</li>
            <li><strong>Investor connections</strong> — Direct access to funding opportunities</li>
            <li><strong>Feedback & coaching</strong> — Refine your pitch with expert guidance</li>
          </ul>
        </section>

        <section>
          <h2>Who Should Apply?</h2>
          <p>
            SVBPC is ideal for teams with a validated idea, early traction, or a strong business model. Whether you're in tech, social impact, or traditional industries, if you have a plan and the ambition to scale, this competition is for you. Spring 2026 applications open at the start of the semester.
          </p>
        </section>
      </article>
    </div>
  );
}

export default SVBPCPage;
