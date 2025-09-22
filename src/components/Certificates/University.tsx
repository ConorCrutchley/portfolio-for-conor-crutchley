import Card from '@/components/Card';
import StaffordshireUniversityLogo from '@/assets/staffordshire-university-square-logo.webp';
import styles from '@/styles/certificates/university.module.css';

/**
 * A component that displays a university's logo and
 * related information.
 *
 * @returns {JSX.Element} - A JSX element representing the
 * university component.
 */
const University = () => {
  return (
    <Card className={styles['university-card']}>
      <div
        className={`flex flex-column-to-row ${styles['university-content']}`}
      >
        <img
          src={StaffordshireUniversityLogo}
          alt="Staffordshire University Logo"
        />
        <div>
          <h3>
            BSc Hons
            <br />
            Multimedia Computing
          </h3>
          <p>First Class Honours</p>
        </div>
      </div>
    </Card>
  );
};

export default University;
