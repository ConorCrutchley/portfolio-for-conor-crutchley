import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/social-links.module.css';

const SocialLinks = () => {
  return (
    <ul className={`${navStyles['nav-link-ul']} ${styles['social-links']}`}>
      <li>
        <a
          className={styles['social-link']}
          href="https://www.linkedin.com/in/conor-crutchley-13446696/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>View My LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          className={styles['social-link']}
          href="https://github.com/ConorCrutchley"
          rel="noopener noreferrer"
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>View My GitHub Profile</span>
        </a>
      </li>
      <li>
        <a
          className={styles['social-link']}
          href="/conor-crutchley-front-end-developer-cv.pdf"
          download
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>Download My CV</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
