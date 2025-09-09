import Card from '../Card';
import type { IExperience } from '@/models/experience.model';
import styles from '@/styles/experience/experience.module.css';

const Experience = ({ experience }: { experience: IExperience }) => {
  const today = new Date();
  const dateEnd = experience.dateEnd ?? today;
  const dateStart = experience.dateStart;
  const dateDiff = dateEnd.getTime() - dateStart.getTime();
  const years = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  return (
    <Card>
      <div className={styles['experience-header']}>
        <h3>
          {experience.company} - {experience.title}
        </h3>
        <span className={styles['duration-pill']}>{years} years</span>
      </div>
      <ul className={styles['experience-list']}>
        {experience.bullets.map((bullet, i) => (
          <li key={`experience_${experience.key}_${i}`}>{bullet}</li>
        ))}
      </ul>
    </Card>
  );
};

export default Experience;
