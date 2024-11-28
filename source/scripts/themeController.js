const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleAutoIcon = document.getElementById("theme-toggle-auto-icon");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Function to update icon visibility
function updateThemeIcon(theme) {
  themeToggleAutoIcon.classList.add("hidden");
  themeToggleDarkIcon.classList.add("hidden");
  themeToggleLightIcon.classList.add("hidden");
  themeToggleBtn.classList.remove("btn-warning", "btn-primary");

  switch (theme) {
    case "light":
      themeToggleLightIcon.classList.remove("hidden");
      themeToggleBtn.classList.add("btn-warning");
      break;
    case "dark":
      themeToggleDarkIcon.classList.remove("hidden");
      themeToggleBtn.classList.add("btn-primary");
      break;
    case "auto":
      themeToggleAutoIcon.classList.remove("hidden");
      break;
  }
}

// Function to get the effective theme
function getEffectiveTheme(theme) {
  if (theme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

// Set initial theme
let currentTheme = localStorage.getItem("theme") || "auto";
let effectiveTheme = getEffectiveTheme(currentTheme);
document.documentElement.setAttribute("data-theme", effectiveTheme);
updateThemeIcon(currentTheme);

themeToggleBtn.addEventListener("click", function () {
  if (currentTheme === "light") {
    currentTheme = "dark";
  } else if (currentTheme === "dark") {
    currentTheme = "auto";
  } else {
    currentTheme = "light";
  }

  localStorage.setItem("theme", currentTheme);
  effectiveTheme = getEffectiveTheme(currentTheme);
  document.documentElement.setAttribute("data-theme", effectiveTheme);
  updateThemeIcon(currentTheme);
});

// Listen for changes in system color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (currentTheme === "auto") {
      effectiveTheme = getEffectiveTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", effectiveTheme);
      updateThemeIcon(currentTheme);
    }
  });
