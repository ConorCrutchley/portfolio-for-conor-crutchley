import { Hamburger, Logo, PageLinks, SocialLinks } from '@/components/Navbar';

import styles from '@/styles/navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div>
        <PageLinks />
        <SocialLinks />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
