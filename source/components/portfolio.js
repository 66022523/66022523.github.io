import configs from "../configs/index.js";

const portfolioItemsElement = document.getElementById("portfolio-items");
const portfolioIndicatorsElement = document.getElementById(
  "portfolio-indicators",
);

const itemsPerPage = 6;
let currentPage = 0;

function loadPortfolioItems(page) {
  // Get the transition duration from the TailwindCSS variable
  const computedStyle = getComputedStyle(document.body);
  const transitionDuration = computedStyle.getPropertyValue(
    "--default-transition-duration",
  );
  const fallbackTransitionDuration =
    computedStyle.getPropertyValue("--tw-duration");
  const fadeDuration = parseInt(
    transitionDuration || fallbackTransitionDuration,
    10,
  );

  // Add fade-out effect
  portfolioItemsElement.classList.remove("opacity-100");
  portfolioItemsElement.classList.add("opacity-0");

  // Use setTimeout to allow the fade-out to complete before changing content
  setTimeout(() => {
    const fragment = document.createDocumentFragment();

    const startIndex = page * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageItems = configs.portfolio.slice(startIndex, endIndex);

    currentPageItems.forEach((portfolio) => {
      const card = document.createElement("a");
      card.className =
        "card card-compact bg-base-100 rounded-xl shadow-xl transition-all hover:-translate-y-5 hover:shadow-2xl";
      card.href = portfolio.link || "";
      card.target = "_blank";
      card.rel = "noopener noreferrer";

      const figure = document.createElement("figure");
      const image = document.createElement("img");
      image.className = "h-52 object-cover object-top";
      image.src = portfolio.source || "";
      image.alt = portfolio.alternate || "";
      image.width = 1920;
      image.height = 1080;
      figure.appendChild(image);

      const body = document.createElement("div");
      body.className = "card-body";

      if (portfolio.title) {
        const title = document.createElement("h2");
        title.className = "card-title";
        title.textContent = portfolio.title;
        body.appendChild(title);
      }
      if (portfolio.description) {
        const description = document.createElement("p");
        description.textContent = portfolio.description;
        body.appendChild(description);
      }
      if (portfolio.tags?.length) {
        const tags = document.createElement("div");
        tags.className = "card-actions justify-end";
        portfolio.tags.forEach((tag) => {
          if (tag) {
            const badge = document.createElement("div");
            badge.className = "badge badge-warning badge-outline";
            badge.textContent = tag;
            tags.appendChild(badge);
          }
        });
        body.appendChild(tags);
      }

      card.append(figure, body);
      fragment.appendChild(card);
    });

    portfolioItemsElement.innerHTML = "";
    portfolioItemsElement.appendChild(fragment);

    // Trigger reflow to ensure the fade-in animation plays
    portfolioItemsElement.offsetHeight;

    // Add fade-in effect
    portfolioItemsElement.classList.remove("opacity-0");
  }, fadeDuration);

  updateNavigationButtons();
}

function updateNavigationButtons() {
  const buttonClass = "btn btn-warning btn-soft btn-xs";

  const prevButton = document.createElement("button");
  prevButton.className = buttonClass;
  prevButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  `;
  prevButton.onclick = () => {
    if (currentPage > 0) {
      currentPage--;
      loadPortfolioItems(currentPage);
    }
  };
  prevButton.disabled = currentPage === 0;

  const totalPages = Math.ceil(configs.portfolio.length / itemsPerPage);
  const indicators = Array.from({ length: totalPages }, (_, i) => {
    const indicatorButton = document.createElement("button");
    indicatorButton.className = buttonClass;
    indicatorButton.textContent = i + 1;
    indicatorButton.onclick = () => {
      currentPage = i;
      loadPortfolioItems(currentPage);
    };

    if (i === currentPage) indicatorButton.classList.add("btn-active");

    return indicatorButton;
  });

  const nextButton = document.createElement("button");
  nextButton.className = buttonClass;
  nextButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  `;
  nextButton.onclick = () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      loadPortfolioItems(currentPage);
    }
  };
  nextButton.disabled = currentPage === totalPages - 1;

  portfolioIndicatorsElement.innerHTML = "";
  portfolioIndicatorsElement.append(prevButton, ...indicators, nextButton);
}

loadPortfolioItems(currentPage);
