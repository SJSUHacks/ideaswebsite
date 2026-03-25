import './WhoAreWeSection.css';
import Button from './Button';

function WhoAreWeSection() {
  return (
    <section className="who-are-we-section">
      <div className="who-are-we-container">
        <div className="who-are-we-card">
          <div className="who-are-we-content">
            <h2 className="who-are-we-heading">IDEAS LAB</h2>
            <h3 className="who-are-we-subheading">Who are we</h3>
            <p className="who-are-we-description">
              IDEAS at San Jose State University was formed to bring together students from different majors and backgrounds to share and collaborate on innovative ideas
            </p>
            <Button href="https://forms.gle/mYrip7d6tq4T3nnT7">Join Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreWeSection;
