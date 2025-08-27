import { Hamburger, Logo, PageLinks, SocialLinks } from '@/components/Navbar';

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
