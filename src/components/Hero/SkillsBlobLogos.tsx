import { skills, type SpecificSkillTitles } from '@/models/skills.model';
import styles from '@/styles/hero/skills-blob-logos.module.css';
const SkillsBlobLogos = () => {
  const skillsToSearch: SpecificSkillTitles[] = [
    'React',
    'GitHub/GitHub Actions',
    'TypeScript',
    'HTML5', // Only displayed after 900px
    'REST APIs', // Only displayed after 1180px
    'Next.js',
    'SEO',
    'CSS3',
    'MUI', // Only displayed after 900px
    '.Net', // Only displayed after 1180px
    'Gatsby.js',
    'Azure',
    'C#',
    'Git',
    'TanStack Start', // Only displayed after 1180px
    'JavaScript',
    'SQL',
    'PHP',
    'Tailwind', // Only displayed after 900px
    'Astro.js', // Only displayed after 1180px
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
