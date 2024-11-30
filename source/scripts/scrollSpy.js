const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {
  const currentPos = window.scrollY;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionID = section.getAttribute("id");

    if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
      navLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove("menu-active");
      });

      document
        .querySelector(`nav a[href="#${sectionID}"]`)
        .classList.add("menu-active");
    }
  });
});
