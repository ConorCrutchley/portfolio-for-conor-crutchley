import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/sociallinks.module.css';

const SocialLinks = () => {
  return (
    <ul className={`${navStyles.navLinkUl} ${styles.socialLinks}`}>
      <li>
        <a
          href="https://www.linkedin.com/in/conor-crutchley-13446696/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a href="https://github.com/ConorCrutchley" rel="noopener noreferrer">
          <FaGithub />{' '}
        </a>
      </li>
      <li>
        <a href="/conor-crutchley-front-end-developer-cv.pdf" download>
          <FaFileDownload />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
