import ProjectCard from '@/components/Projects/ProjectCard';
import { projects } from '@/models/projects.model';
import styles from '@/styles/projects/projects.module.css';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className={`flex flex-column-to-row ${styles['project-list']}`}>
        {projects.map((project) => (
          <ProjectCard key={`projects_${project.key}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
