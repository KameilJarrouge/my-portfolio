import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center py-10 md:py-14 gap-5">
      <div className="rounded-full w-28 h-28 bg-white dark:bg-gray-800 mx-auto flex items-center justify-center overflow-hidden">
        <img
          src="/me.png"
          alt="Portrait of Kamil Victor Jarrouj"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col gap-2 items-center text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold dark:text-gray-100 text-gray-800">
          Kamil Victor Jarrouj
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Backend &amp; Full-Stack Engineer (TypeScript / Node.js)
        </p>
        <p className="text-gray-600 dark:text-gray-300">
          Backend-focused engineer with production experience in healthcare,
          retail and iGaming, specializing in real-time state management and
          simulation tooling.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Essen, Germany · Open to backend and full-stack roles · Chancenkarte,
          convertible to a Blue Card or work permit with a job offer
        </p>
      </div>

      <nav
        aria-label="Profile links"
        className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-blue-600 dark:text-blue-400"
      >
        <a
          href="https://github.com/KameilJarrouge"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kamil-jarrouj"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
        <a href="mailto:kamiljarrougedev@gmail.com" className="hover:underline">
          Email
        </a>
        <a
          href="/Kamil_Jarrouj_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          CV
        </a>
      </nav>
    </section>
  );
}

export default Hero;
