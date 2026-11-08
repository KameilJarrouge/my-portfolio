import React, { useState } from "react";
import ProjectModal from "./Modals/ProjectModal";

function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="flex flex-col gap-3 h-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 md:p-5">
      <div className="flex flex-col gap-1">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {project.source}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 break-words">
          {project.title}
        </h3>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2" aria-label="Technologies">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
          >
            {tech}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="mt-auto w-fit py-3 pr-6 text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
      >
        Details
      </button>

      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={project} />
    </article>
  );
}

export default ProjectCard;
