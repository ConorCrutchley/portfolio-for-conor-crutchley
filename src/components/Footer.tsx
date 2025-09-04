import SocialLinks from '@/components/SocialLinks/SocialLinks';
import styles from '@/styles/footer.module.css';

const Footer = () => {
  const today = new Date();
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <p>Designed and built by Conor Crutchley &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
