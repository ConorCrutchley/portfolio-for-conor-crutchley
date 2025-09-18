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
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [classNames, setClassNames] = useState(styles['certificate-modal']);

  const toggleModal = () => {
    const timeoutDuration = 400;
    setBtnDisabled(true);
    const step1ClassName = `flex flex-column flex-center ${styles['certificate-modal']} ${!isOpen ? styles['certificate-modal-transitioning'] : `${styles['certificate-modal-open']} ${styles['certificate-modal-close-start']}`}`;
    const step2ClassName = `flex flex-column flex-center ${styles['certificate-modal']} ${styles['certificate-modal-transitioning']}`;
    const step3ClassName = `flex flex-column flex-center ${styles['certificate-modal']} ${!isOpen ? styles['certificate-modal-open'] : ''}`;

    const finalStep = () => {
      setClassNames(step3ClassName);
      setIsOpen(!isOpen);
      setBtnDisabled(false);
    };
    setClassNames(step1ClassName);
    if (isOpen) {
      setTimeout(() => {
        setClassNames(step2ClassName);
        setTimeout(finalStep, timeoutDuration / 4);
      }, timeoutDuration);
    } else
      setTimeout(() => {
        finalStep();
      }, timeoutDuration * 2);
  };
  return (
    <Card className={classNames}>
      <div className={styles['certificate-modal-header']}>
        <h3 className={styles['certificate-modal-header-title']}>
          {certificateGroup.group}
        </h3>
        <div className={styles['modal-button-container']}>
          <button
            className={styles['modal-button']}
            onClick={toggleModal}
            disabled={btnDisabled}
            aria-label={
              !isOpen
                ? `Show ${certificateGroup.group}`
                : `Hide ${certificateGroup.group}`
            }
          >
            <span className={styles['modal-button-close']}></span>
            <span className={styles['modal-button-text']}>Show Courses</span>
          </button>
        </div>
      </div>
      <div className={`flex ${styles['certificate-cards']}`}>
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
