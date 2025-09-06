import Experience from '@/components/Experience/Experience';
import { experience } from '@/models/experience.model';
import styles from '@/styles/experience/experience-list.module.css';

const ExperienceList = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className={styles['experience-list']}>
        <div className={styles['experience-list-items']}>
          {experience.map((xp) => (
            <div
              key={`experience_${xp.key}`}
              className={styles['experience-list-item']}
            >
              <div className={styles['experience-list-item-bullet']}></div>
              <Experience experience={xp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceList;
