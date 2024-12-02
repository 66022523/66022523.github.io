const sections = document.querySelectorAll("section");

const sectionColors = {
  home: {
    design: "var(--color-info)",
    research: "var(--color-success)",
  },
  about: {
    design: "var(--color-secondary)",
    research: "var(--color-error)",
  },
  skills: {
    design: "var(--color-error)",
    research: "var(--color-warning)",
  },
  portfolio: {
    design: "var(--color-warning)",
    research: "var(--color-info)",
  },
  experiences: {
    design: "var(--color-info)",
    research: "var(--color-primary)",
  },
  contact: {
    design: "var(--color-primary)",
    research: "var(--color-secondary)",
  },
};

function updateCanvasColor() {
  const scrollPosition = window.scrollY;

  requestAnimationFrame(() => {
    for (const section of sections) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        const colorDesign =
          sectionColors[section.id].design || "var(--color-info)";
        const colorResearch =
          sectionColors[section.id].research || "var(--color-success)";

        document.documentElement.style.setProperty(
          "--canvas-color-design",
          colorDesign,
        );
        document.documentElement.style.setProperty(
          "--canvas-color-research",
          colorResearch,
        );
        break;
      }
    }
  });
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateCanvasColor();
      ticking = false;
    });
    ticking = true;
  }
});

updateCanvasColor(); // Initial call to set the color for the first visible section
