import React from "react";

const EMAIL = "kamiljarrougedev@gmail.com";

const linkClass =
  "py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-4 py-12 md:py-16 scroll-mt-16 bg-white dark:bg-gray-950 text-gray-800 dark:text-white"
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-300">
          I’m looking for a backend or full-stack role in Germany. If you’d like
          to talk, write to me or find me on LinkedIn.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="text-blue-600 dark:text-blue-400 hover:underline text-lg break-all"
        >
          {EMAIL}
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <a
            href="https://github.com/KameilJarrouge"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kamil-jarrouj"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            LinkedIn
          </a>
          <a
            href="/Kamil_Jarrouj_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
