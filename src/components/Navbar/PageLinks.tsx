import { useEffect, useState } from 'react';

import navStyles from '@/styles/navbar/navbar.module.css';
import styles from '@/styles/navbar/page-links.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const sections = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'certificates',
  'contact',
];

const PageLinks = () => {
  const navbarHeight = 140;
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = 'home';
          const currentScrollY = navbarHeight + window.scrollY;
          sections.forEach((id) => {
            const section = document.getElementById(id);
            if (section) {
              const sectionTop = section.offsetTop;
              if (currentScrollY >= sectionTop) current = id;
            }
          });

          if (current !== activeSection) setActiveSection(current);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <ul className={`${navStyles['nav-link-ul']} ${styles['page-links']}`}>
      {sections.map((section) => {
        return (
          <li key={`navbar_pagelink_${section}`}>
            <a
              href={`#${section}`}
              data-text={section}
              className={activeSection === section ? styles['active'] : ''}
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
