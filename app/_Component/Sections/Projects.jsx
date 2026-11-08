import React from "react";
import ProjectCard from "../ProjectCard";
import PROJECTS from "../Static/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full px-4 py-10 md:py-14 gap-6 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
        Projects
      </h2>

      <div className="flex flex-wrap justify-center gap-5 w-full max-w-6xl">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="flex w-full md:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
