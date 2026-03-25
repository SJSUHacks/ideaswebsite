import { Link } from 'react-router-dom';
import './DetailPage.css';

function ZinnstarterPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <span className="detail-badge">ZINNSTARTER</span>
        <h1>Zinnstarter Accelerator Program</h1>
        <p className="detail-lead">
          Get funding and mentorship from Ray Zinn to launch your startup. Spring 2026.
        </p>

        <section>
          <h2>About Zinnstarter</h2>
          <p>
            The Zinnstarter Accelerator Program is a unique opportunity for SJSU students to receive direct funding and mentorship from Ray Zinn—co-founder and former CEO of Micrel, and a legendary figure in Silicon Valley. This program is designed for founders who are ready to take the leap and need both capital and wisdom to succeed.
          </p>
        </section>

        <section>
          <h2>What the Program Offers</h2>
          <ul>
            <li><strong>Startup funding</strong> — Financial support to launch and grow your venture</li>
            <li><strong>Direct mentorship from Ray Zinn</strong> — Learn from decades of Silicon Valley experience</li>
            <li><strong>Accelerator curriculum</strong> — Structured program covering product, market, and growth</li>
            <li><strong>Network access</strong> — Connect with Ray's network of investors and advisors</li>
            <li><strong>Cohort experience</strong> — Build alongside other ambitious founders</li>
          </ul>
        </section>

        <section>
          <h2>Ray Zinn</h2>
          <p>
            Ray Zinn is the longest-serving CEO of a publicly traded company in Silicon Valley history, having led Micrel for 37 years. His philosophy on perseverance, integrity, and long-term thinking has shaped countless entrepreneurs. Through Zinnstarter, he brings that wisdom directly to SJSU students.
          </p>
        </section>

        <section>
          <h2>Spring 2026</h2>
          <p>
            The Zinnstarter Accelerator runs in Spring 2026. Applications are competitive—we're looking for founders with clear vision, commitment, and the drive to build something lasting. Apply early to secure your spot.
          </p>
        </section>
      </article>
    </div>
  );
}

export default ZinnstarterPage;
