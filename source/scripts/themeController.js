const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleAutoIcon = document.getElementById("theme-toggle-auto-icon");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Function to set theme based on system preference
function setThemeBasedOnSystemPreference() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Function to update icon visibility
function updateThemeIcon(theme) {
  themeToggleAutoIcon.classList.add("hidden");
  themeToggleDarkIcon.classList.add("hidden");
  themeToggleLightIcon.classList.add("hidden");

  switch (theme) {
    case "light":
      themeToggleLightIcon.classList.remove("hidden");
      themeToggleBtn.classList.add("btn-warning");
      themeToggleBtn.classList.remove("btn-primary");
      break;
    case "dark":
      themeToggleDarkIcon.classList.remove("hidden");
      themeToggleBtn.classList.add("btn-primary");
      themeToggleBtn.classList.remove("btn-warning");
      break;
    case "auto":
      themeToggleAutoIcon.classList.remove("hidden");
      themeToggleBtn.classList.remove("btn-warning");
      themeToggleBtn.classList.remove("btn-primary");
      break;
  }
}

// Set initial theme
let currentTheme = localStorage.getItem("theme") || "auto";
if (currentTheme === "auto") {
  setThemeBasedOnSystemPreference();
} else {
  document.documentElement.setAttribute("data-theme", currentTheme);
}
updateThemeIcon(currentTheme);

themeToggleBtn.addEventListener("click", function () {
  if (currentTheme === "light") {
    currentTheme = "dark";
  } else if (currentTheme === "dark" || (currentTheme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    currentTheme = "auto";
  } else {
    currentTheme = "light";
  }

  localStorage.setItem("theme", currentTheme);

  if (currentTheme === "auto") {
    setThemeBasedOnSystemPreference();
  } else {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  updateThemeIcon(currentTheme);
  updateButtonStyle(currentTheme);
});

// New function to update button style
function updateButtonStyle(theme) {
  themeToggleBtn.classList.remove("btn-warning", "btn-primary");
  if (theme === "light" || (theme === "auto" && !window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeToggleBtn.classList.add("btn-warning");
  } else if (theme === "dark" || (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    themeToggleBtn.classList.add("btn-primary");
  }
}

// Update initial button style
updateButtonStyle(currentTheme);

// Listen for changes in system color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (currentTheme === "auto") {
      setThemeBasedOnSystemPreference();
    }
  });
