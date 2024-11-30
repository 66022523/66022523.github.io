const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcons = {
  auto: document.getElementById("theme-toggle-auto-icon"),
  dark: document.getElementById("theme-toggle-dark-icon"),
  light: document.getElementById("theme-toggle-light-icon"),
};

function updateThemeIcon(theme) {
  Object.values(themeIcons).forEach((icon) => icon.classList.add("hidden"));
  themeToggleBtn.classList.remove("btn-warning", "btn-primary");

  if (theme === "light") {
    themeIcons.light.classList.remove("hidden");
    themeToggleBtn.classList.add("btn-warning");
  } else if (theme === "dark") {
    themeIcons.dark.classList.remove("hidden");
    themeToggleBtn.classList.add("btn-primary");
  } else {
    themeIcons.auto.classList.remove("hidden");
  }
}

function applyTheme(theme) {
  const effectiveTheme =
    theme === "auto"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  document.documentElement.setAttribute("data-theme", effectiveTheme);
  updateThemeIcon(theme);
}

let currentTheme = localStorage.getItem("theme") || "auto";
applyTheme(currentTheme);

themeToggleBtn.addEventListener("click", () => {
  currentTheme =
    currentTheme === "light"
      ? "dark"
      : currentTheme === "dark"
        ? "auto"
        : "light";
  localStorage.setItem("theme", currentTheme);
  applyTheme(currentTheme);
});

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (currentTheme === "auto") applyTheme(currentTheme);
  });
