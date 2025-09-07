import SkillsBlobLogos from '@/components/Hero/SkillsBlobLogos';
import styles from '@/styles/hero/skills-blob.module.css';

const SkillsBlob = () => {
  return (
    <div className={styles['blob-container']}>
      <div className={styles['blob']}></div>
      <SkillsBlobLogos />
    </div>
  );
};

export default SkillsBlob;
