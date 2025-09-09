import Card from '@/components/Card';
import CertificateCard from '@/components/Certificates/CertificateCard';
import type { ICertificateGroup } from '@/models/certificates.model';
import styles from '@/styles/certificates/certificate-group-modal.module.css';
import { useState } from 'react';

const CertificateGroupModal = ({
  certificateGroup,
}: {
  certificateGroup: ICertificateGroup;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card
      className={`${styles['certificate-modal']} ${isOpen ? styles['certificate-modal-open'] : ''}`}
    >
      <div className={styles['certificate-modal-header']}>
        <h3>{certificateGroup.group}</h3>
        <div className={styles['modal-button-container']}>
          <button onClick={() => setIsOpen(!isOpen)}>Show Courses</button>
        </div>
      </div>
      <div className={styles['certificate-cards']}>
        {certificateGroup.certificates.map((certificate) => (
          <CertificateCard
            key={`certificate_${certificate.key}`}
            certificate={certificate}
          />
        ))}
      </div>
    </Card>
  );
};

export default CertificateGroupModal;
