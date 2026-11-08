import React, { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import ImageCarousel from "../ImageCarousel";

const headingClass =
  "text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2";

function ProjectModal({ isOpen, setIsOpen, project }) {
  const titleId = useId();
  const panelRef = useRef(null);
  const lightboxOpen = useRef(false);

  const handleLightbox = (isLightboxOpen) => {
    if (isLightboxOpen) {
      lightboxOpen.current = true;
    } else {
      // Escape closes the lightbox first. Keep the flag set until our own
      // Escape handler has run, so one press doesn't close both.
      setTimeout(() => {
        lightboxOpen.current = false;
      }, 0);
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add("overflow-hidden");
    panelRef.current?.focus();

    const onKeyDown = (e) => {
      if (e.key === "Escape" && !lightboxOpen.current) setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-4 md:p-6 flex flex-col gap-6 focus:outline-none"
      >
        <header className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2
              id={titleId}
              className="text-xl md:text-2xl font-bold break-words"
            >
              {project.title}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.source}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {project.stack.join(" · ")}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="p-2 -m-2 rounded text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="w-6 h-6"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </header>

        {project.description && (
          <section>
            <h3 className={headingClass}>Overview</h3>
            <p className="text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </section>
        )}

        {project.highlights?.length > 0 && (
          <section>
            <h3 className={headingClass}>Highlights</h3>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 flex flex-col gap-1">
              {project.highlights.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        )}

        {project.diagrams?.length > 0 && (
          <section className="min-w-0">
            <h3 className={headingClass}>Architecture and diagrams</h3>
            <ImageCarousel
              images={project.diagrams}
              onLightboxChange={handleLightbox}
            />
          </section>
        )}

        {project.screenshots?.length > 0 && (
          <section className="min-w-0">
            <h3 className={headingClass}>Screenshots</h3>
            <ImageCarousel
              images={project.screenshots}
              onLightboxChange={handleLightbox}
            />
          </section>
        )}

        {project.status && (
          <section>
            <h3 className={headingClass}>Status</h3>
            <p className="text-gray-700 dark:text-gray-300">{project.status}</p>
          </section>
        )}

        {project.repos?.length > 0 && (
          <section>
            <h3 className={headingClass}>Code</h3>
            <ul className="list-disc pl-5 flex flex-col gap-1">
              {project.repos.map((repo) => (
                <li key={repo.url}>
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline break-words"
                  >
                    {repo.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>,
    document.body,
  );
}

export default ProjectModal;
