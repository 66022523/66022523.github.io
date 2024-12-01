const scrollToTopElement = document.getElementById("scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopElement.classList.remove("invisible");
    scrollToTopElement.classList.remove("opacity-0");
    scrollToTopElement.classList.add("visible");
    scrollToTopElement.classList.add("opacity-100");
  } else {
    scrollToTopElement.classList.add("invisible");
    scrollToTopElement.classList.add("opacity-0");
    scrollToTopElement.classList.remove("visible");
    scrollToTopElement.classList.remove("opacity-100");
  }
});

scrollToTopElement.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
