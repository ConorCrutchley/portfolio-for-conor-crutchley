import Card from '@/components/Card';
import Chip from '@/components/Chip';
import type { IProject } from '@/models/projects.model';
import githubLogo from '@/assets/skill-logos/github-logo.png';
import styles from '@/styles/projects/project-card.module.css';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <Card className={`flex flex-column ${styles['project-card']}`}>
      <img
        src={project.thumbnail.src}
        alt={project.thumbnail.alt}
        className={styles['project-img']}
        loading="lazy"
      />
      <h3>{project.title}</h3>
      <div className={`flex ${styles['project-skills']}`}>
        {project.skills.map((skill) => (
          <Chip key={`projects_${project.key}_${skill}`} text={skill} />
        ))}
      </div>
      <div className={styles['project-excerpt']}>{project.excerpt}</div>
      <div className={`flex flex-column-to-row ${styles['project-links']}`}>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`button flex flex-center ${styles['project-link']}`}
          >
            <img
              src={githubLogo}
              alt="GitHub Logo"
              className={styles['github-img']}
            />
            View Repository
          </a>
        )}
        {project.siteLink && (
          <a
            href={project.siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`button flex flex-center ${styles['project-link']}`}
          >
            Visit Site
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;
