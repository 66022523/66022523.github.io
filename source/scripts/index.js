document.addEventListener("DOMContentLoaded", function () {
  import("./carouselAutoplay.js");
  import("./scrollSpy.js");
  import("./scrollToTop.js");
  import("./themeController.js");

  // Set current age in about section
  const aboutAgeElement = document.getElementById("about-age");
  aboutAgeElement.textContent = new Date().getFullYear() - 2005;

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year");
  currentYearElement.textContent = new Date().getFullYear();
});
