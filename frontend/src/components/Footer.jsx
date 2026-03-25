import { Link } from 'react-router-dom';
import './Footer.css';
import Button from './Button';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-cta">
          <h3 className="footer-cta-title">
            BECOME A PART OF<br />
            <span className="footer-cta-highlight">IDEAS</span> TODAY
          </h3>
          <Button href="https://forms.gle/mYrip7d6tq4T3nnT7">Join Us</Button>
        </div>
        <div className="footer-column footer-contact">
          <div className="footer-info-block">
            <h4 className="footer-heading">Email</h4>
            <a href="mailto:ideas.sjsu@gmail.com" className="footer-link">ideas.sjsu@gmail.com</a>
          </div>
          <div className="footer-info-block">
            <h4 className="footer-heading">Location</h4>
            <p className="footer-text">
              San Jose State University<br />
              Student Union Building<br />
              San Jose, CA 95192
            </p>
          </div>
          <div className="footer-info-block">
            <h4 className="footer-heading">Lab hours</h4>
            <p className="footer-text">
              <span className="footer-text-gray">MON-THU</span>  10:30 am - 6:30 pm
            </p>
          </div>
        </div>
        <div className="footer-column footer-links-column">
          <div className="footer-quick-links">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links-list">
              <Link to="/about" className="footer-nav-link">About us</Link>
              <a href="/#programs" className="footer-nav-link">Programs</a>
              <a href="/#events" className="footer-nav-link">Upcoming events</a>
              <a href="mailto:ideas.sjsu@gmail.com" className="footer-nav-link">Contact us</a>
            </div>
          </div>
          <div className="footer-social">
            <h4 className="footer-heading">Follow us</h4>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/ideassjsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn"
              >
                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.92 2.5C4.92 3.88 3.78 5 2.38 5C0.98 5 0 3.88 0 2.5C0 1.12 1.12 0 2.5 0C3.88 0 4.92 1.12 4.92 2.5ZM5 7H0V21H5V7ZM11.99 7H7.02V21H11.99V13.64C11.99 9.37 17.5 9.03 17.5 13.64V21H22V12.07C22 4.5 14.03 4.77 11.99 8.52V7Z" fill="var(--black)"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/ideas.sjsu/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.8C12.67 1.8 12.99 1.81 14.04 1.86C15.02 1.9 15.55 2.07 15.9 2.21C16.36 2.39 16.7 2.61 17.05 2.95C17.39 3.3 17.61 3.63 17.79 4.1C17.93 4.45 18.1 4.98 18.14 5.96C18.19 7.01 18.2 7.33 18.2 10C18.2 12.67 18.19 12.99 18.14 14.04C18.1 15.02 17.93 15.55 17.79 15.9C17.61 16.36 17.39 16.7 17.05 17.05C16.7 17.39 16.37 17.61 15.9 17.79C15.55 17.93 15.02 18.1 14.04 18.14C12.99 18.19 12.67 18.2 10 18.2C7.33 18.2 7.01 18.19 5.96 18.14C4.98 18.1 4.45 17.93 4.1 17.79C3.64 17.61 3.3 17.39 2.95 17.05C2.61 16.7 2.39 16.37 2.21 15.9C2.07 15.55 1.9 15.02 1.86 14.04C1.81 12.99 1.8 12.67 1.8 10C1.8 7.33 1.81 7.01 1.86 5.96C1.9 4.98 2.07 4.45 2.21 4.1C2.39 3.64 2.61 3.3 2.95 2.95C3.3 2.61 3.63 2.39 4.1 2.21C4.45 2.07 4.98 1.9 5.96 1.86C7.01 1.81 7.33 1.8 10 1.8ZM10 0C7.28 0 6.94 0.01 5.88 0.06C4.82 0.11 4.09 0.28 3.45 0.53C2.78 0.79 2.22 1.13 1.65 1.65C1.13 2.22 0.79 2.78 0.53 3.45C0.28 4.09 0.11 4.82 0.06 5.88C0.01 6.94 0 7.28 0 10C0 12.72 0.01 13.06 0.06 14.12C0.11 15.18 0.28 15.91 0.53 16.55C0.79 17.22 1.13 17.78 1.65 18.35C2.22 18.87 2.78 19.21 3.45 19.47C4.09 19.72 4.82 19.89 5.88 19.94C6.94 19.99 7.28 20 10 20C12.72 20 13.06 19.99 14.12 19.94C15.18 19.89 15.91 19.72 16.55 19.47C17.22 19.21 17.78 18.87 18.35 18.35C18.87 17.78 19.21 17.22 19.47 16.55C19.72 15.91 19.89 15.18 19.94 14.12C19.99 13.06 20 12.72 20 10C20 7.28 19.99 6.94 19.94 5.88C19.89 4.82 19.72 4.09 19.47 3.45C19.21 2.78 18.87 2.22 18.35 1.65C17.78 1.13 17.22 0.79 16.55 0.53C15.91 0.28 15.18 0.11 14.12 0.06C13.06 0.01 12.72 0 10 0Z" fill="var(--black)"/>
                  <path d="M10 4.86C7.16 4.86 4.86 7.16 4.86 10C4.86 12.84 7.16 15.14 10 15.14C12.84 15.14 15.14 12.84 15.14 10C15.14 7.16 12.84 4.86 10 4.86ZM10 13.33C8.16 13.33 6.67 11.84 6.67 10C6.67 8.16 8.16 6.67 10 6.67C11.84 6.67 13.33 8.16 13.33 10C13.33 11.84 11.84 13.33 10 13.33Z" fill="var(--black)"/>
                  <path d="M16.54 4.66C16.54 5.32 16.01 5.86 15.34 5.86C14.68 5.86 14.14 5.33 14.14 4.66C14.14 4 14.67 3.46 15.34 3.46C16.01 3.46 16.54 3.99 16.54 4.66Z" fill="var(--black)"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
