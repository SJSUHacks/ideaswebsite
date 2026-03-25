import './AboutPage.css';
import AboutIntro from '../components/about/AboutIntro';
import Achievements from '../components/about/Achievements';
import TeamSection from '../components/about/TeamSection';
import TheLabSection from '../components/about/TheLabSection';
import FAQSection from '../components/about/FAQSection';

function AboutPage() {
  return (
    <div className="about-page">
      <AboutIntro />
      <Achievements />
      <TeamSection />
      <TheLabSection />
      <FAQSection />
    </div>
  );
}

export default AboutPage;
