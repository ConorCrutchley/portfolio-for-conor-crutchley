import CertificateGroupModal from './CertificateGroupModal';
import University from './University';
import { certificateGroups } from '../../models/certificates.model';

const Certificates = () => {
  return (
    <section>
      <h2>Courses</h2>
      <University />
      <div>
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
