import { useEffect, useState } from 'react';

import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/pagelinks.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const PageLinks = () => {
  const navbarHeight = 140;
  const sections = [
    'home',
    'about',
    'skills',
    'projects',
    'experience',
    'certificates',
    'contact',
  ];
  const [activeSection, setActiveSection] = useState<string>('home');
  const { open, toggle } = useNavOpenStore();
  const scrollToSection = (section: string) => {
    const sectionElem = document.getElementById(section);
    if (!sectionElem) return;
    if (open) toggle();
    const scrollTo = sectionElem.offsetTop - navbarHeight;
    window.scrollTo({
      top: scrollTo,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      const currentScrollY = navbarHeight + window.scrollY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (currentScrollY >= sectionTop) current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <ul className={`${navStyles.navLinkUl} ${styles.pagelinks}`}>
      {sections.map((section) => {
        return (
          <li key={`navbar_pagelink_${section}`}>
            <a
              href={`#${section}`}
              data-text={section}
              className={activeSection === section ? styles.active : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
