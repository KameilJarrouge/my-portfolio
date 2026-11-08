import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

const LINKS = [
  { href: "#experience", title: "Experience" },
  { href: "#projects", title: "Projects" },
  { href: "#techStack", title: "Tech Stack" },
  { href: "#about", title: "About" },
  { href: "#CV", title: "CV" },
  { href: "#contact", title: "Contact" },
];

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Main"
      className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-y-2"
    >
      <a href="#" className="text-xl font-bold">
        Kamil Victor Jarrouj
      </a>

      <div className="flex items-center gap-4 lg:gap-6">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-6 text-sm">
          {LINKS.map((l) => (
            <li key={l.href}>
              <NavLink href={l.href} title={l.title} />
            </li>
          ))}
        </ul>

        <ThemeToggle />

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden p-2 -mr-2 rounded"
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
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile links */}
      {open && (
        <ul
          id="mobile-nav"
          onClick={(e) => {
            if (e.target.closest("a")) setOpen(false);
          }}
          className="md:hidden w-full flex flex-col text-sm"
        >
          {LINKS.map((l) => (
            <li key={l.href} className="py-2">
              <NavLink href={l.href} title={l.title} />
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
