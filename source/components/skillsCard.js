import { getAverageRGB } from "../scripts/utils.js";

class SkillCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Create a shadow root
    const shadow = this.attachShadow({ mode: "closed" });

    // Apply external styles to the shadow dom
    const linkElement = document.createElement("link");
    linkElement.setAttribute("rel", "stylesheet");
    linkElement.setAttribute("href", "./styles/output.css");

    // Create card
    const card = document.createElement("div");
    card.setAttribute(
      "class",
      "card overflow-clip backdrop-blur before:absolute before:inset-0 before:-z-10 before:bg-cover before:bg-center before:blur-2xl",
    );

    const figure = document.createElement("figure");
    figure.setAttribute("class", "px-10 pt-10");

    // Create and set up image
    const img = document.createElement("img");
    img.src = this.getAttribute("icon-src") || "";
    img.alt = this.getAttribute("icon-alt") || "";
    img.width = "48px";
    img.height = "48px";
    img.setAttribute("class", "size-12 rounded");

    // Get average color when image loads
    img.onload = () => {
      const { r, g, b } = getAverageRGB(img);
      card.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
    };

    // Create card body
    const body = document.createElement("div");
    body.setAttribute("class", "card-body items-center text-center");

    // Cerate skill title
    const title = document.createElement("h2");
    title.textContent = this.getAttribute("data-title") || "";
    title.setAttribute("class", "card-title");

    // Create skill types
    const type = document.createElement("div");
    type.textContent = this.getAttribute("data-type") || "";
    type.setAttribute("class", "badge badge-neutral");

    // Create skill description
    const description = document.createElement("p");
    description.textContent = this.getAttribute("data-description") || "";

    // Attach the created elements to the shadow dom
    shadow.appendChild(linkElement);
    shadow.appendChild(card);
    card.appendChild(figure);
    figure.appendChild(img);
    card.appendChild(body);
    body.appendChild(title);
    body.appendChild(type);
    body.appendChild(description);
  }
}

customElements.define("skill-card", SkillCard);
