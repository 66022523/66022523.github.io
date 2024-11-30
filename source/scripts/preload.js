let theme = localStorage.getItem("theme") || "auto";

if (theme === "auto") {
  theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

document.documentElement.setAttribute("data-theme", theme);
