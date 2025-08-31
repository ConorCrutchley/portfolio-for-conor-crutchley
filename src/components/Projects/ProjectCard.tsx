import type { IProject } from '@/models/projects.model';
import githubLogo from '@/assets/skill-logos/github-logo.png';

const ProjectCard = ({ project }: { project: IProject }) => {
  return (
    <div>
      <img src={project.thumbnail.src} alt={project.thumbnail.alt} />
      <p>
        <strong>{project.title}</strong>
      </p>
      <div>
        {project.skills.map((skill) => (
          <span key={`projects_${project.key}_${skill}`}>{skill}</span>
        ))}
      </div>
      <p>{project.excerpt}</p>
      <div>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub Logo" />
        </a>
        <a href={project.siteLink} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
