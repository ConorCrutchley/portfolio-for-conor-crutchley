import {
  certificatePlatforms,
  type ICertificate,
} from '@/models/certificates.model';
import Card from '@/components/Card';
import styles from '@/styles/certificates/certificate-card.module.css';

const CertificateCard = ({ certificate }: { certificate: ICertificate }) => {
  const platform = certificatePlatforms[certificate.platform];
  return (
    <Card className={`flex flex-column ${styles['certificate-card']}`}>
      <div className={`flex flex-column ${styles['certificate-images']}`}>
        <img
          className={styles['img-thumbnail']}
          src={certificate.thumbnail.src}
          alt={certificate.thumbnail.alt}
        />
        <div className={styles['img-platform-container']}>
          <img
            className={styles['img-platform']}
            src={platform.src}
            alt={platform.alt}
          />
        </div>
      </div>
      <div className={`flex flex-column ${styles['certificate-content']}`}>
        <div className={styles['certificate-title']}>
          <h4>{certificate.title}</h4>
          <p className={styles['certificate-subtitle']}>
            {certificate.subtitle}
          </p>
        </div>
        <p>
          <strong>Course By: </strong>
          {certificate.provider}
        </p>
        <a
          href={certificate.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          View Certificate
        </a>
      </div>
    </Card>
  );
};

export default CertificateCard;
