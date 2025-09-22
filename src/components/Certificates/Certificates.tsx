import { CertificateGroupModal, University } from '@/components/Certificates';

import { certificateGroups } from '@/models/certificates.model';
import styles from '@/styles/certificates/certificates.module.css';

/**
 * A component that renders a University component and a list of
 * CertificateGroupModal components.
 *
 * Each CertificateGroupModal component represents a group of certificates.
 *
 * @returns {JSX.Element} - A JSX element representing the certificates section
 */

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Courses</h2>
      <University />

      {/* 
        Map over the certificateGroups array and 
        render a CertificateGroupModal component for each group 
      */}
      <div className={`flex flex-column-to-row ${styles['courses']}`}>
        {certificateGroups.map((certificateGroup) => (
          <CertificateGroupModal
            key={`certificate-group_${certificateGroup.group}`}
            certificateGroup={certificateGroup}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
