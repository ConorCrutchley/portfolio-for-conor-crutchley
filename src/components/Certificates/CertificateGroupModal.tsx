import CertificateCard from '@/components/Certificates/CertificateCard';
import type { ICertificateGroup } from '@/models/certificates.model';

const CertificateGroupModal = ({
  certificateGroup,
}: {
  certificateGroup: ICertificateGroup;
}) => {
  return (
    <div>
      <div>
        <h3>{certificateGroup.group}</h3>
      </div>
      <div>
        {certificateGroup.certificates.map((certificate) => (
          <CertificateCard
            key={`certificate_${certificate.key}`}
            certificate={certificate}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificateGroupModal;
