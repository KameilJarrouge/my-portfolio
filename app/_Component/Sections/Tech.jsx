import React from "react";
import ReactIcon from "../DevIcons/ReactIcon";
import LaravelIcon from "../DevIcons/LaravelIcon";
import PythonIcon from "../DevIcons/PythonIcon";
import JavascriptIcon from "../DevIcons/JavascriptIcon";
import SQLiteIcon from "../DevIcons/SQLiteIcon";
import NextJsIcon from "../DevIcons/NextJsIcon";
import TailwindIcon from "../DevIcons/TailwindIcon";
import JavaIcon from "../DevIcons/JavaIcon";
import PHPIcon from "../DevIcons/PHPIcon";
import SQLIcon from "../DevIcons/SQLIcon";
import ExpressJSIcon from "../DevIcons/ExpressJSIcon";
import CSSIcon from "../DevIcons/CSSIcon";
import MySQLIcon from "../DevIcons/MySQLIcon";
import GitIcon from "../DevIcons/GitIcon";
import GithubIcon from "../DevIcons/GithubIcon";
import VercelIcon from "../DevIcons/VercelIcon";
import GraphQLIcon from "../DevIcons/GraphQLIcon";
import NodeIcon from "../DevIcons/NodeIcon";
import BashIcon from "../DevIcons/BashIcon";
import SocketIOIcon from "../DevIcons/SocketIOIcon";

const SECTIONS = [
  {
    title: "Languages",
    badges: [
      { title: "TypeScript" },
      { title: "JavaScript", icon: <JavascriptIcon /> },
      { title: "PHP", icon: <PHPIcon /> },
      { title: "Python", icon: <PythonIcon /> },
      { title: "Java", icon: <JavaIcon /> },
      { title: "SQL", icon: <SQLIcon /> },
    ],
  },
  {
    title: "Backend & Data",
    badges: [
      { title: "Node.js", icon: <NodeIcon /> },
      { title: "Express.js", icon: <ExpressJSIcon /> },
      { title: "Laravel", icon: <LaravelIcon /> },
      { title: "Prisma" },
      { title: "GraphQL", icon: <GraphQLIcon /> },
      { title: "REST" },
      { title: "Socket.io", icon: <SocketIOIcon /> },
      { title: "Redis" },
      { title: "SQLite", icon: <SQLiteIcon /> },
      { title: "MySQL", icon: <MySQLIcon /> },
    ],
  },
  {
    title: "Frontend",
    badges: [
      { title: "React", icon: <ReactIcon /> },
      { title: "Next.js", icon: <NextJsIcon /> },
      { title: "React Native", icon: <ReactIcon /> },
      { title: "Tailwind CSS", icon: <TailwindIcon /> },
      { title: "CSS", icon: <CSSIcon /> },
    ],
  },
  {
    title: "Testing & Tools",
    badges: [
      { title: "Jest" },
      { title: "Vitest" },
      { title: "Cypress" },
      { title: "Git", icon: <GitIcon /> },
      { title: "GitHub", icon: <GithubIcon /> },
      { title: "GitHub Actions" },
      { title: "NGINX" },
      { title: "Bash", icon: <BashIcon /> },
      { title: "Vercel", icon: <VercelIcon /> },
    ],
  },
];

function Tech() {
  return (
    <section
      id="techStack"
      className="flex flex-col items-center w-full px-4 py-10 md:py-14 gap-6 scroll-mt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
        Tech Stack
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-4xl">
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="flex flex-col gap-2 md:flex-row md:gap-6"
          >
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 md:w-44 md:shrink-0 md:pt-1">
              {section.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {section.badges.map((badge) => (
                <TechBadge
                  key={badge.title}
                  title={badge.title}
                  icon={badge.icon}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tech;

function TechBadge({ icon, title }) {
  return (
    <li className="bg-white shadow-sm dark:bg-gray-800 px-3 py-1.5 rounded flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200">
      {/* {icon && <span className="w-5 shrink-0">{icon}</span>} */}
      <span>{title}</span>
    </li>
  );
}
