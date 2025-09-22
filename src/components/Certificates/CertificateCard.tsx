import {
  certificatePlatforms,
  type ICertificate,
} from '@/models/certificates.model';
import Card from '@/components/Card';
import styles from '@/styles/certificates/certificate-card.module.css';

/**
 * A component that renders a card for a single certificate
 * @param {Object} props - an object containing the certificate to be rendered
 * @param {ICertificate} props.certificate - the certificate to be rendered
 * @returns {JSX.Element} - a JSX element representing the certificate card
 */
const CertificateCard = ({ certificate }: { certificate: ICertificate }) => {
  const platform = certificatePlatforms[certificate.platform];
  return (
    <Card className={`flex flex-column ${styles['certificate-card']}`}>
      {/* Certificate thumbnail and logo of the platform I got the certificate from */}
      <div className={`flex flex-column ${styles['certificate-images']}`}>
        <img
          className={styles['img-thumbnail']}
          src={certificate.thumbnail.src}
          alt={certificate.thumbnail.alt}
          loading="lazy"
        />
        <div className={styles['img-platform-container']}>
          <img
            className={styles['img-platform']}
            src={platform.src}
            alt={platform.alt}
            loading="lazy"
          />
        </div>
      </div>

      {/* Content of the certificate */}
      <div className={`flex flex-column ${styles['certificate-content']}`}>
        {/* Title and subtitle of the certificate */}
        <div className={styles['certificate-title']}>
          <h4>{certificate.title}</h4>
          <p className={styles['certificate-subtitle']}>
            {certificate.subtitle}
          </p>
        </div>

        {/* Provider of the certificate */}
        <p>
          <strong>Course By: </strong>
          {certificate.provider}
        </p>

        {/* Link to the certificate */}
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
