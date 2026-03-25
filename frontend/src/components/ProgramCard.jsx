import './ProgramCard.css';
import Button from './Button';

function ProgramCard({ image, title, description, date, learnMorePath }) {
  return (
    <div className="program-card">
      <div className="program-image-container">
        <img src={image} alt={title} className="program-image" />
      </div>
      <div className="program-content">
        <h3 className="program-title">{title}</h3>
        <p className="program-description">{description}</p>
        <div className="program-footer">
          <span className="program-date">{date}</span>
          <Button variant="secondary" to={learnMorePath}>Learn more</Button>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;

