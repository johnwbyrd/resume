import { ResumeData } from '@/utils/loadResumeData';
import { MaybeLink } from '../MaybeLink';

interface ProjectsProps {
  resumeData: ResumeData;
}

export function Projects({ resumeData }: ProjectsProps) {
  const { projects } = resumeData || {};

  if (!projects || projects.length === 0) return null;

  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul className="projects-list">
        {projects.map((project, i) => (
          <li key={i} className="project-item">
            <h3 className="project-name">
              <MaybeLink href={project.url}>{project.name}</MaybeLink>
            </h3>
            {project.description && (
              <p className="project-description">{project.description}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
