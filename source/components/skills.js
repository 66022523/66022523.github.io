import configs from "../configs/index.js";
import { getAverageColor } from "../scripts/utils.js";

const fragment = document.createDocumentFragment();
const skillCarouselItemsElement = document.getElementById(
  "skill-carousel-items",
);
const skillCarouselIndicatorsElement = document.getElementById(
  "skill-carousel-indicators",
);

configs.skills.forEach((skill, index) => {
  if (index % 8 === 0) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item grid w-full gap-4 lg:grid-cols-4";
    carouselItem.id = `skill-item-${index / 8}`;
    fragment.appendChild(carouselItem);

    // Create indicator
    const indicator = document.createElement("a");
    indicator.href = `#skill-item-${index / 8}`;
    indicator.className = "btn btn-error btn-soft btn-xs";
    indicator.textContent = index / 8 + 1;
    skillCarouselIndicatorsElement.appendChild(indicator);
  }

  // Create card
  const card = document.createElement("div");
  card.className =
    "card overflow-clip backdrop-blur before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:blur-2xl";

  const figure = document.createElement("figure");
  figure.className = "px-10 pt-10";

  // Create and set up image
  const img = document.createElement("img");
  // img.loading = "lazy";
  img.src = skill["source"];
  img.alt = skill["alternate"];
  img.width = 48;
  img.height = 48;
  img.className = "size-12 rounded";

  // Get average color when image loads
  img.onload = () => {
    const { r, g, b } = getAverageColor(img);
    card.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
  };

  // Create card body
  const body = document.createElement("div");
  body.className = "card-body items-center text-center";

  // Create skill title
  const title = document.createElement("h2");
  title.textContent = skill["title"] ?? "";
  title.className = "card-title";

  // Create skill types
  const type = document.createElement("div");
  type.textContent = skill["type"] ?? "";
  type.className = "badge badge-neutral";

  // Create skill description
  const description = document.createElement("p");
  description.textContent = skill["description"] ?? "";

  // Attach the created elements
  figure.appendChild(img);
  card.appendChild(figure);
  title && body.appendChild(title);
  type && body.appendChild(type);
  description && body.appendChild(description);
  card.appendChild(body);

  fragment.lastChild.appendChild(card);
});

skillCarouselItemsElement.appendChild(fragment);
