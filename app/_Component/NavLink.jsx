import React from "react";

function NavLink({ href, title }) {
  return (
    <a href={href} className="hover:text-blue-500 dark:hover:text-blue-400">
      <button className="cursor-pointer">{title}</button>
    </a>
  );
}

export default NavLink;
