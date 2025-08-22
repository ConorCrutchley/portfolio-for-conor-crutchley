import ProjectCard from './ProjectCard';
import { projects } from '../../models/projects.model';

const Projects = () => {
  return (
    <section>
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <ProjectCard key={`projects_${project.key}`} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
