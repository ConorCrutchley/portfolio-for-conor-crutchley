import { CertificateGroupModal, University } from '@/components/Certificates';

import { certificateGroups } from '@/models/certificates.model';
import styles from '@/styles/certificates/certificates.module.css';

const Certificates = () => {
  return (
    <section id="certificates">
      <h2>Courses</h2>
      <University />
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
