import {
  certificatePlatforms,
  type ICertificate,
} from '../../models/certificates.model';

const CertificateCard = ({ certificate }: { certificate: ICertificate }) => {
  const platform = certificatePlatforms[certificate.platform];
  return (
    <div>
      <div>
        <img src={certificate.thumbnail.src} alt={certificate.thumbnail.alt} />
        <img src={platform.src} alt={platform.alt} />
      </div>
      <div>
        <p>
          <strong>{certificate.title}</strong>
        </p>
        <p>{certificate.subtitle}</p>
        <p>
          <strong>Course By: </strong>
          {certificate.provider}
        </p>
        <a
          href={certificate.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
