// ? Theme Controller
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
      break;
    case "dark":
      themeToggleDarkIcon.classList.remove("hidden");
      break;
    case "auto":
      themeToggleAutoIcon.classList.remove("hidden");
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

const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  if (currentTheme === "light") {
    currentTheme = "dark";
  } else if (currentTheme === "dark") {
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
});

// Listen for changes in system color scheme
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (currentTheme === "auto") {
      setThemeBasedOnSystemPreference();
    }
  });

// ? Scrollspy
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function () {
    const currentPos = window.scrollY;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
        navLinks.forEach(function (navbarLink) {
          navbarLink.classList.remove("active");
        });

        document
          .querySelector('nav a[href="#' + sectionId + '"]')
          .classList.add("active");
      }
    });
  });
});

// ? Calculate age
const aboutAge = document.getElementById("about-age");
const birthYear = 2005;
const currentYear = new Date().getFullYear();
const currentAge = currentYear - birthYear;

aboutAge.textContent = currentAge;
