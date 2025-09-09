import Card from '@/components/Card';
import CertificateCard from '@/components/Certificates/CertificateCard';
import type { ICertificateGroup } from '@/models/certificates.model';

const CertificateGroupModal = ({
  certificateGroup,
}: {
  certificateGroup: ICertificateGroup;
}) => {
  return (
    <Card>
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
    </Card>
  );
};

export default CertificateGroupModal;
