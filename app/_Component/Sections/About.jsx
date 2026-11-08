import React from "react";

const IBM_CERT = {
  title: "IBM – Introduction to Networking and Storage",
  href: "https://www.coursera.org/account/accomplishments/certificate/CVLQRWJCF9HF",
};

const DL_COURSES = [
  {
    title: "Neural Networks and Deep Learning",
    href: "https://www.coursera.org/account/accomplishments/certificate/MV63R2EUZS7K",
  },
  {
    title: "Improving Deep Neural Networks",
    href: "https://www.coursera.org/account/accomplishments/certificate/WP4RA66HSN92",
  },
  {
    title: "Structuring Machine Learning Projects",
    href: "https://www.coursera.org/account/accomplishments/certificate/5J8B5HSJ6S78",
  },
  {
    title: "Convolutional Neural Networks",
    href: "https://www.coursera.org/account/accomplishments/certificate/U5GYNTGANRBD",
  },
  {
    title: "Sequence Models",
    href: "https://www.coursera.org/account/accomplishments/certificate/NMUMC6JQM4PU",
  },
];

const linkClass =
  "text-blue-600 dark:text-blue-400 hover:underline break-words";

function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-full px-4 py-10 md:py-14 scroll-mt-16"
    >
      <div className="flex flex-col gap-8 w-full max-w-4xl text-gray-800 dark:text-gray-100">
        {/* Intro */}
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl font-bold">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-[70ch]">
            I like systems where correctness matters: shared state across
            several instances, safe updates while users are active, and
            simulations that show whether a design behaves as intended. I’ve
            also built tools that clinics and a restaurant use every day, and I
            enjoy that side of the work just as much.
          </p>
          <p className="text-gray-600 dark:text-gray-300 max-w-[70ch]">
            Based in Essen, Germany. I work in English and I’m learning German.
          </p>
        </div>

        {/* Education + Languages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="flex flex-col gap-1 text-gray-600 dark:text-gray-300">
              <p className="font-medium text-gray-800 dark:text-gray-100">
                B.Sc. in Informatics Engineering
              </p>
              <p>Al-Hawash Private University</p>
              <p>Coursework 2018–2023 · Degree conferred July 2024</p>
              <p>Grade: Excellent (GPA 3.48/4.0)</p>
              <p>
                Graduation project: face-recognition attendance system (Laravel,
                React, Python)
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">Languages</h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 flex flex-col gap-1">
              <li>Arabic (native)</li>
              <li>English (C1)</li>
              <li>German (A1)</li>
            </ul>
          </div>
        </div>

        {/* Certificates */}
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Certificates</h3>
          <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 flex flex-col gap-2">
            <li>
              <a
                href={IBM_CERT.href}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {IBM_CERT.title}
              </a>
            </li>
            <li>
              <details>
                <summary className="cursor-pointer">
                  Deep Learning Specialization – DeepLearning.AI (5 courses)
                </summary>
                <ul className="list-disc pl-5 mt-2 flex flex-col gap-1">
                  {DL_COURSES.map((c) => (
                    <li key={c.href}>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {c.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          </ul>
        </div>

        {/* CV */}
        <div id="CV" className="flex flex-col gap-3 scroll-mt-16">
          <h3 className="text-xl font-semibold">CV</h3>
          <div>
            <a
              href="/Kamil_Jarrouj_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Download CV (PDF)
            </a>
          </div>
        </div>

        {/* Pointer */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          See my work in{" "}
          <a href="#experience" className={linkClass}>
            Experience
          </a>{" "}
          and{" "}
          <a href="#projects" className={linkClass}>
            Projects
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default About;
