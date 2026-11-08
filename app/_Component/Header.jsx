"use client";
import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50">
      <Navigation />
    </header>
  );
}

export default Header;
