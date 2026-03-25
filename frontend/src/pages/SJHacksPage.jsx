import { Link } from 'react-router-dom';
import './DetailPage.css';

function SJHacksPage() {
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      <article className="detail-content">
        <span className="detail-badge">SJHACKS</span>
        <h1>SJHacks</h1>
        <p className="detail-lead">
          An interdisciplinary hackathon in collaboration with ACM Computer Science Club. Build, innovate, and compete in Spring 2026.
        </p>

        <section>
          <h2>What is SJHacks?</h2>
          <p>
            SJHacks is IDEAS Club's flagship hackathon event, bringing together students from all disciplines—computer science, engineering, design, business, and beyond—to collaborate on innovative projects over an intensive weekend. In partnership with the ACM Computer Science Club, we create an environment where diverse perspectives meet technical excellence.
          </p>
        </section>

        <section>
          <h2>What to Expect</h2>
          <ul>
            <li><strong>48-hour build sprint</strong> — Turn your idea into a working prototype</li>
            <li><strong>Interdisciplinary teams</strong> — Form teams with students from different majors</li>
            <li><strong>Mentorship</strong> — Get guidance from industry professionals and faculty</li>
            <li><strong>Prizes & recognition</strong> — Compete for awards and showcase your project</li>
            <li><strong>Networking</strong> — Connect with recruiters and fellow innovators</li>
          </ul>
        </section>

        <section>
          <h2>Who Can Participate?</h2>
          <p>
            SJHacks is open to all San Jose State University students. No prior hackathon experience required—whether you're a seasoned coder or a first-time builder, there's a place for you. Designers, developers, and dreamers alike are welcome.
          </p>
        </section>

        <section>
          <h2>Spring 2026</h2>
          <p>
            Mark your calendars for Spring 2026. Registration details and event schedule will be announced soon. Follow us on social media and join our mailing list to stay updated.
          </p>
        </section>
      </article>
    </div>
  );
}

export default SJHacksPage;
