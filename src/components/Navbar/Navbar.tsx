import Hamburger from './Hamburger';
import Logo from './Logo';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const Navbar = () => {
  return (
    <nav>
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
