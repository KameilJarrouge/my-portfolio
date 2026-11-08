"use client";

import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../_hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme, mounted } = useTheme();

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-800 dark:text-gray-100 flex items-center gap-2 cursor-pointer p-2 rounded"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
}
