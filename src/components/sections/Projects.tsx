import { ResumeData } from '@/utils/loadResumeData';

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
              {project.url ? (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </a>
              ) : (
                project.name
              )}
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
