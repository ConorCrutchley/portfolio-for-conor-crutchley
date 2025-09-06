import { skills, type SpecificSkillTitles } from '@/models/skills.model';
import styles from '@/styles/hero/skills-blob-logos.module.css';
const SkillsBlobLogos = () => {
  const skillsToSearch: SpecificSkillTitles[] = [
    'React',
    'GitHub/GitHub Actions',
    'TypeScript',
    'Next.js',
    'SEO',
    'CSS3',
    'Gatsby.js',
    'Azure',
    'C#',
    'JavaScript',
    'SQL',
    'PHP',
  ];
  const skillLogos = skills
    .map((x) =>
      x.specificSkills.filter((y) => skillsToSearch.includes(y.skill)),
    )
    .flat();
  return (
    <div className={styles['skill-logos']}>
      {skillLogos.map((skill) => (
        <div
          key={`skillsBlob_skillLogo_${skill.key}`}
          id={styles[`blob-skill-logo-${skill.key}`]}
          className={styles['skill-logo']}
        >
          <img {...skill.logo} />
        </div>
      ))}
    </div>
  );
};

export default SkillsBlobLogos;
