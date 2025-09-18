import GlitchBraces from '@/assets/portfolio-logo-glitching-braces.png';
import styles from '@/styles/navbar/logo.module.css';

const Logo = () => {
  return (
    <div className={styles['logo']}>
      <img
        src={GlitchBraces}
        alt="curly braces in a blue to violet gradient with a glitch effect"
      />
      <span className={`position-center ${styles['logo-text']}`}>CC</span>
    </div>
  );
};

export default Logo;
