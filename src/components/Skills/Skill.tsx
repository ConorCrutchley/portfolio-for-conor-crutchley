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
    <div className={styles.skill}>
      <img
        src={specificSkill.logo.src}
        alt={specificSkill.logo.alt}
        className={styles.skillImg}
      />
      <p>{specificSkill.skill}</p>
      <div className={styles.skillPill}>
        <div
          className={styles.skillPillFill}
          style={{ width: `${specificSkill.level}%` }}
        ></div>
        <span>{levelWording}</span>
      </div>
    </div>
  );
};

export default Skill;
