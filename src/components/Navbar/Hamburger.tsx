import styles from '@/styles/navbar/hamburger.module.css';
import { useNavOpenStore } from '@/store/useNavOpenStore';

const Hamburger = () => {
  const { open, toggle } = useNavOpenStore();
  return (
    <div className={`${styles.hamburger} ${open ? styles.open : ''}`}>
      <button onClick={toggle}>
        <span></span>
      </button>
    </div>
  );
};

export default Hamburger;
