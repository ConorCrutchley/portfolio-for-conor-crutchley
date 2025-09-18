import SkillsBlob from '@/components/Hero/SkillsBlob';
import styles from '@/styles/hero/hero.module.css';

const Hero = () => {
  return (
    <section id="home" className={`flex flex-column-to-row ${styles['hero']}`}>
      <div className={styles['hero-text']}>
        <h1>Hello, I'm Conor</h1>
        <h2>Your new front-end developer</h2>
      </div>
      <SkillsBlob />
    </section>
  );
};

export default Hero;
