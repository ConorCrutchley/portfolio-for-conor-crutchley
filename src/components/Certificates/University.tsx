import Card from '@/components/Card';
import StaffordshireUniversityLogo from '@/assets/staffordshire-university-square-logo.png';
import styles from '@/styles/certificates/university.module.css';

const University = () => {
  return (
    <Card className={styles['university-card']}>
      <div className={styles['university-content']}>
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
