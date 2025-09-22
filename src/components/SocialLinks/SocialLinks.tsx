import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/social-links.module.css';

/**
 * SocialLinks component
 *
 * This component renders a list of social links, including
 * a link to my LinkedIn profile, a link to my GitHub profile,
 * and a link to download my CV.
 *
 * @returns {JSX.Element} A JSX element representing the social
 * links list.
 */
const SocialLinks = () => {
  return (
    <ul className={`${navStyles['nav-link-ul']} ${styles['social-links']}`}>
      {/* LinkedIn */}
      <li>
        <a
          className={styles['social-link']}
          href={process.env.PUBLIC_LINKS_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>View My LinkedIn</span>
        </a>
      </li>

      {/* GitHub */}
      <li>
        <a
          className={styles['social-link']}
          href={process.env.PUBLIC_LINKS_GITHUB}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles['icon']}></span>
          <span className={styles['icon-bottom']}></span>
          <span className={styles['tooltip']}>View My GitHub Profile</span>
        </a>
      </li>

      {/* CV */}
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
