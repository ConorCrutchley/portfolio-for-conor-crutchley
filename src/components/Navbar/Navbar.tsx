import { Hamburger, Logo, PageLinks } from '@/components/Navbar';
import { SocialLinkClipPaths, SocialLinks } from '@/components/SocialLinks';

import styles from '@/styles/navbar/navbar.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const Navbar = () => {
  const { open } = useNavOpenStore();
  return (
    <nav className={`flex  ${styles['navbar']} ${open ? styles['open'] : ''}`}>
      <Logo />
      <div
        className={`flex flex-between-center flex-column-to-row ${styles['nav-links']}`}
      >
        <PageLinks />
        <SocialLinkClipPaths />
        <SocialLinks />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Navbar;
