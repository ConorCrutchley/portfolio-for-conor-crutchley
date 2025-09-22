import Card from '@/components/Card';
import CertificateCard from '@/components/Certificates/CertificateCard';
import type { ICertificateGroup } from '@/models/certificates.model';
import styles from '@/styles/certificates/certificate-group-modal.module.css';
import { useState } from 'react';

/**
 * A component that renders a modal containing a group of certificates.
 * The modal animates as it opens and closes.
 *
 * @param {Object} props - an object containing the certificate group to be rendered
 * @param {ICertificateGroup} props.certificateGroup - the certificate group to be rendered
 * @returns {JSX.Element} - a JSX element representing the certificate group modal
 */
const CertificateGroupModal = ({
  certificateGroup,
}: {
  certificateGroup: ICertificateGroup;
}) => {
  // States for the modal, button, and class names
  const [isOpen, setIsOpen] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [classNames, setClassNames] = useState(styles['certificate-modal']);

  const toggleModal = () => {
    // Base time for the animation
    const timeoutDuration = 400;

    // Set the button disabled state to true to prevent multiple clicks
    setBtnDisabled(true);

    // Each step has these class names at least
    const stepClassName = `flex flex-column flex-center ${styles['certificate-modal']}`;

    // Class names specific to each step of the animation
    const step1ClassName = `${stepClassName} ${!isOpen ? styles['certificate-modal-transitioning'] : `${styles['certificate-modal-open']} ${styles['certificate-modal-close-start']}`}`;
    const step2ClassName = `${stepClassName} ${styles['certificate-modal-transitioning']}`;
    const step3ClassName = `${stepClassName} ${!isOpen ? styles['certificate-modal-open'] : ''}`;

    /**
     * Final step of the modal animation. Sets the modal class names
     * to their final state, toggles the isOpen state, and sets the
     * button disabled state to false.
     */
    const finalStep = () => {
      setClassNames(step3ClassName);
      setIsOpen(!isOpen);
      setBtnDisabled(false);
    };

    // Set the class names for step 1 on the animation
    setClassNames(step1ClassName);

    // If the modal is open, wait for the transition to complete
    // before setting the class names for step 2
    if (isOpen) {
      setTimeout(() => {
        // Set the class names for step 2 on the animation
        setClassNames(step2ClassName);

        // Wait for the transition to complete and call the final step
        setTimeout(finalStep, timeoutDuration / 4);
      }, timeoutDuration);
    } else {
      // If the modal is closed, wait for the transition to complete
      // before calling the final step
      setTimeout(() => {
        finalStep();
      }, timeoutDuration * 2);
    }
  };

  return (
    <Card className={classNames}>
      {/* Header of the modal containing the title and show/hide button */}
      <div className={styles['certificate-modal-header']}>
        {/* Title */}
        <h3 className={styles['certificate-modal-header-title']}>
          {certificateGroup.group}
        </h3>

        {/* Show/hide button */}
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

      {/* Container for the certificates */}
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
