import { useState } from 'react';
import './FAQSection.css';

const faqData = [
  {
    question: 'How do I join IDEAS Club?',
    answer: 'You can join IDEAS Club by attending our general meetings or signing up through our website. No prior experience is required!',
    topic: 'Joining'
  },
  {
    question: 'What kind of projects can I work on?',
    answer: 'You can work on any project that interests you - from mobile apps to hardware projects, from social enterprises to tech startups.',
    topic: 'Joining'
  },
  {
    question: 'Do I need to know how to code?',
    answer: 'Not at all! IDEAS Club welcomes students from all majors and backgrounds. We have teams for marketing, finance, events, and more.',
    topic: 'Requirements'
  },
  {
    question: 'Do I need to have experience to join IDEAS',
    answer: "You don't need direct experience, as long as you are willing to learn, have fun, and have an interest in Entreprenuership.",
    topic: "Requirements"
  },
  {
    question: 'When are the meetings held?',
    answer: 'Our general meetings are typically held weekly. Check our events page for the latest schedule.',
    topic: 'Joining'
  },
  {
    question: "How do I become an officer",
    answer: "Our applications open at the beginning of each semester!",
    topic: 'How do I become an officer'
  },
  {
    question: "What teams can I be an officer for",
    answer: "You can apply to be an officer for Web Dev, Finance, Events, Marketing",
    topic: 'Officer Applications'
  }
];

const topics = ['Joining', 'Requirements', 'Officer Applications'];

function FAQSection() {
  const [activeTopic, setActiveTopic] = useState('Joining');
  const [openFaq, setOpenFaq] = useState(null);

  const filteredFaqs = faqData.filter((faq) => faq.topic === activeTopic);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="about-section-title">FAQ</h2>

      <div className="faq-tabs">
        {topics.map((topic) => (
          <button
            key={topic}
            className={`faq-tab ${activeTopic === topic ? 'active' : ''}`}
            onClick={() => {
              setActiveTopic(topic);
              setOpenFaq(null);
            }}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="faq-list">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${openFaq === index ? 'open' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq-card-header">
                <div className="faq-card-icon">
                  <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 0C4.48 0 0 3.58 0 8C0 12.42 4.48 16 10 16C10.59 16 11.17 15.96 11.73 15.88L16 17V13.13C18.09 11.83 20 9.61 20 8C20 3.58 15.52 0 10 0ZM11 13H9V11H11V13ZM11 9H9V3H11V9Z" fill="var(--black)"/>
                  </svg>
                </div>
                <span className="faq-card-question">{faq.question}</span>
                <span className="faq-card-arrow">
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="rgba(0, 0, 0, 0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              {openFaq === index && (
                <div className="faq-card-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="faq-no-results">No FAQs available for this topic yet.</p>
        )}
      </div>

      <p className="faq-contact">
        Didn't answer your question? Email us at{' '}
        <a href="mailto:Ideas.sjsu@gmail.com">Ideas.sjsu@gmail.com</a>
      </p>
    </section>
  );
}

export default FAQSection;
