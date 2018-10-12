import fs from "fs";

const styles = fs.readFileSync(__dirname + "/styles/main.css", "utf8");
const rectangleStyles = [
  "rect-slide",
  "rect-flip",
  "rect-move",
  "rect-hide",
  "rect-updown",
  "rect-zoomin",
  "rect-slide2",
  "rect-slide3",
  "rect-slide4"
];

const addSpan = ["flip", "fadeout", "slideall"];

const template = document.createElement("template");

template.innerHTML = `
  <style>
${styles}

</style>
<div class="button r" role="switch" aria-label="CSS Toggle Button" aria-checked="true">
  <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">
  <div class="knobs" data-yes="✔" data-no="✕"></div>
  <div class="layer"></div>
</div>
`;

const template1 = `
<div class="button r" role="switch" aria-label="CSS Toggle Button" aria-checked="true">
  <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">
  <div class="knobs" data-yes="✔" data-no="✕"></div>
  <div class="layer"></div>
</div>
  `;

const rectTemplate = document.createElement("template");
rectTemplate.innerHTML = `
  <style>
  ${styles}

  </style>
        <div class="button b2" role="switch" aria-label="CSS Toggle Button" aria-checked="true">
          <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">
          <div class="knobs">
            <span></span>
          </div>
          <div class="layer"></div>
        </div>
  `;
class CSSToggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    const theme = this.getAttribute("theme") || "slide";
    if (rectangleStyles.includes(theme)) {
      this.shadowRoot.appendChild(rectTemplate.content.cloneNode(true));
    } else {
      this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }

  connectedCallback() {
    const btn = this.shadowRoot.querySelector(".button");
    const theme = this.getAttribute("theme") || "slide";
    const onLabel = this.getAttribute("on-label") || "✔";
    const offLabel = this.getAttribute("off-label") || "✕";
    btn.classList.add(theme);

    const knobs = this.shadowRoot.querySelector(".knobs");
    knobs.setAttribute("data-yes", onLabel);
    knobs.setAttribute("data-no", offLabel);
    if (addSpan.includes(theme)) {
      const span = document.createElement("span");
      span.setAttribute("data-yes", onLabel);
      span.setAttribute("data-no", offLabel);
      knobs.appendChild(span);
    }

    if (theme === "rect-slide") {
      const span = this.shadowRoot.querySelector("span");
      span.textContent = onLabel;
    }
  }
}

window.customElements.define("css-toggle", CSSToggle);
