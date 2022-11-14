import Project from '../Project';
import { projects } from '../ProjectData';

export default function Portfolio() {
  return (
    <>
      <h2>Portfolio</h2>
      <div className='row project-row'>
        {projects.map((project) => (
          <Project
            title={project.title}
            url={project.url}
            image={project.image}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </>
  );
}
