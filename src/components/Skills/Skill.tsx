import type { ISpecificSkill } from '@/models/skills.model';
import styles from '@/styles/skill.module.css';

const Skill = ({ specificSkill }: { specificSkill: ISpecificSkill }) => {
  const levelWording =
    specificSkill.level < 40
      ? 'Beginner'
      : specificSkill.level >= 40 && specificSkill.level <= 60
        ? 'Intermediate'
        : 'Advanced';
  return (
    <div className={`flex flex-column flex-between-center ${styles['skill']}`}>
      <img
        {...specificSkill.logo}
        className={styles['skill-img']}
        loading="lazy"
        width={96}
        height={96}
      />
      <p>{specificSkill.skill}</p>
      <div className={styles['skill-pill']}>
        <div
          className={styles['skill-pill-fill']}
          style={{ width: `${specificSkill.level}%` }}
        ></div>
        <span>{levelWording}</span>
      </div>
    </div>
  );
};

export default Skill;
