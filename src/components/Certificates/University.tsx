import StaffordshireUniversityLogo from '../../assets/staffordshire-university-square-logo.png';

const University = () => {
  return (
    <div>
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
  );
};

export default University;
