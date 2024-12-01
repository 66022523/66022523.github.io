const sideNavLinks = document.querySelectorAll("nav a");
const bottomNavLinks = document.querySelectorAll("nav .dock a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const currentPos = window.scrollY;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionID = section.getAttribute("id");

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      sideNavLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove("menu-active");
      });
      bottomNavLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove("dock-active");
      });

      document
        .querySelector(`nav a[href="#${sectionID}"]`)
        .classList.add("menu-active");
      document
        .querySelector(`nav .dock a[href="#${sectionID}"]`)
        .classList.add("dock-active");
    }
  });
});
