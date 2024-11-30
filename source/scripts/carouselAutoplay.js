export function nextSlide() {
  const container = document.querySelector(".carousel");
  const items = document.querySelectorAll(".carousel-item");
  const currentScroll = container.scrollLeft;
  const itemWidth = items[0].offsetWidth;

  let nextScrollPosition = currentScroll + itemWidth;

  // If we're at the end, loop back to the start
  if (nextScrollPosition >= container.scrollWidth) {
    nextScrollPosition = 0;
  }

  container.scrollTo({
    left: nextScrollPosition,
    behavior: "smooth",
  });
}

let autoplayInterval = setInterval(nextSlide, 5000);

const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
carousel.addEventListener(
  "mouseleave",
  () => (autoplayInterval = setInterval(nextSlide, 5000)),
);
