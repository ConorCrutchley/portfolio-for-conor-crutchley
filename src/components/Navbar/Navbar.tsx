import { Hamburger, Logo, PageLinks } from '@/components/Navbar';
import { SocialLinkCipPaths, SocialLinks } from '@/components/SocialLinks';

import styles from '@/styles/navbar/navbar.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const Navbar = () => {
  const { open } = useNavOpenStore();
  return (
    <nav className={`${styles['navbar']} ${open ? styles['open'] : ''}`}>
      <Logo />
      <div className={styles['nav-links']}>
        <PageLinks />
        <SocialLinkCipPaths />
        <SocialLinks />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
