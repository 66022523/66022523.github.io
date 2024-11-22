import { useState, useEffect } from "react";
import { themeChange } from "theme-change";
import {
  ComputerDesktopIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

function initializeTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    document.documentElement.setAttribute("data-theme", systemTheme);
  }
}
initializeTheme();

export function Header() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto");

  const applyTheme = (newTheme: string) => {
    if (newTheme === "auto") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      document.documentElement.setAttribute("data-theme", systemTheme);
    } else {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };
  const handleThemeChange = () => {
    const newTheme =
      theme === "light" ? "dark" : theme === "dark" ? "auto" : "light";
    applyTheme(newTheme);
  };
  const ThemeIcon = () => {
    switch (theme) {
      case "auto":
        return <ComputerDesktopIcon className="size-5" />;
      case "dark":
        return <MoonIcon className="size-5 text-purple-500" />;
      case "light":
        return <SunIcon className="size-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  useEffect(() => {
    themeChange(false);
    applyTheme(theme);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 flex items-center p-4">
      <button
        type="button"
        className="btn btn-circle"
        aria-label="Theme"
        onClick={handleThemeChange}
      >
        <ThemeIcon />
      </button>
    </header>
  );
}
