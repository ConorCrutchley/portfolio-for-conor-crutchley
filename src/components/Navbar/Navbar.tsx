import { Hamburger, Logo, PageLinks, SocialLinks } from '@/components/Navbar';

import styles from '@/styles/navbar/navbar.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const Navbar = () => {
  const { open } = useNavOpenStore();
  return (
    <nav className={`${styles.navbar} ${open ? styles.open : ''}`}>
      <Logo />
      <div className={styles.navLinks}>
        <PageLinks />
        <SocialLinks />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
