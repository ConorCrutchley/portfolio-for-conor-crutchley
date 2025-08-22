import type { IExperience } from '../../models/experience.model';

const Experience = ({ experience }: { experience: IExperience }) => {
  const today = new Date();
  const dateEnd = experience.dateEnd ?? today;
  const dateStart = experience.dateStart;
  const dateDiff = dateEnd.getTime() - dateStart.getTime();
  const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  return (
    <div>
      <div>
        <h3>
          {experience.company} - {experience.title}
        </h3>
        <span>{years} years</span>
      </div>
      <ul>
        {experience.bullets.map((bullet, i) => (
          <li key={`experience_${experience.key}_${i}`}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
