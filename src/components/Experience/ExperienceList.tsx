import Experience from '@/components/Experience/Experience';
import { experience } from '@/models/experience.model';

const ExperienceList = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      {experience.map((xp) => (
        <Experience key={`experience_${xp.key}`} experience={xp} />
      ))}
    </section>
  );
};

export default ExperienceList;
