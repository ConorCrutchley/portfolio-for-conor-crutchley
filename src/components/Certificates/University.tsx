import Card from '@/components/Card';
import StaffordshireUniversityLogo from '@/assets/staffordshire-university-square-logo.png';

const University = () => {
  return (
    <Card>
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
    </Card>
  );
};

export default University;
