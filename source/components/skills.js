import configs from "../configs/index.js";
import { getAverageColor } from "../scripts/utils.js";

const fragment = document.createDocumentFragment();
const skillItemsElement = document.getElementById("skill-items");
const skillIndicatorsElement = document.getElementById("skill-indicators");

const maxItems = 8;

configs.skills.forEach((skill, index) => {
  if (index % maxItems === 0) {
    const carouselItem = document.createElement("div");
    carouselItem.className = "carousel-item grid w-full gap-4 lg:grid-cols-4";
    carouselItem.id = `skill-item-${index / maxItems}`;
    fragment.appendChild(carouselItem);

    const indicator = document.createElement("a");
    indicator.href = `#skill-item-${index / maxItems}`;
    indicator.className = "btn btn-error btn-soft btn-xs";
    indicator.textContent = index / maxItems + 1;
    skillIndicatorsElement.appendChild(indicator);
  }

  const card = document.createElement("div");
  card.className =
    "card overflow-clip backdrop-blur before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:blur-2xl";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.loading = "lazy";
  image.src = skill.source ?? "";
  image.alt = skill.alternate ?? "";
  image.width = 48;
  image.height = 48;
  image.className = "size-12 rounded";
  image.onload = () => {
    const { r, g, b } = getAverageColor(image);
    card.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
  };
  figure.className = "px-10 pt-10";
  figure.appendChild(image);

  const body = document.createElement("div");
  body.className = "card-body items-center text-center";

  if (skill.title) {
    const title = document.createElement("h2");
    title.textContent = skill.title ?? "";
    title.className = "card-title";
    body.appendChild(title);
  }
  if (skill.type) {
    const type = document.createElement("div");
    type.textContent = skill.type ?? "";
    type.className = "badge badge-neutral";
    body.appendChild(type);
  }
  if (skill.description) {
    const description = document.createElement("p");
    description.textContent = skill.description ?? "";
    body.appendChild(description);
  }

  card.append(figure, body);
  fragment.lastChild.appendChild(card);
});

skillItemsElement.appendChild(fragment);
