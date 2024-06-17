"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "./icons";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme == "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-light-dark dark:text-dark-light dark:hover:bg-utility-dark rounded-md p-1.5 outline-none transition-colors duration-500 ease-in-out hover:bg-utility focus-visible:ring-2 focus-visible:ring-accent"
    >
      {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
}
