(function() {
  const rectangleStyles = ["rect-slide", "rect-flip", "rect-move", "rect-hide"];
  const addSpan = ["flip", "fadeout", "slideall"];

  const templateWithSpan = `     
  <div class="button b2" role="switch" aria-label="CSS Toggle Button" aria-checked="true">
          <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">
          <div class="knobs">
            <span></span>
          </div>
          <div class="layer"></div>
        </div>
  `;
  const template = document.createElement("template");
  const commonStyles = `
.button
{
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 37px);
  width: 74px;
  height: 36px;
  overflow: hidden;
}

.button.r, .button.r .layer
{
  border-radius: 100px;
}
.button.b2
{
  border-radius: 2px;
}

.checkbox
{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}

.knobs
{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
}

.layer
{
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}
`;

  template.innerHTML = `
  <style>
${commonStyles}
/* Slide */
.slide .knobs:before
{
  content: attr(data-yes);
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #03A9F4;
  border-radius: 50%;
  transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.slide .checkbox:checked + .knobs:before
{
  content: attr(data-no);
  left: 42px;
  background-color: #f44336;
}

.slide .checkbox:checked ~ .layer
{
  background-color: #fcebeb;
}

.slide .knobs, 
.slide .knobs:before, 
.slide .layer
{
  transition: 0.3s ease all;
}

/* Move  */
.move .knobs:before, .move .knobs:after
{
  content: attr(data-yes);
  position: absolute;
  top: 4px;
  left: 4px;
  width: 20px;
  height: 10px;
  color: #fff;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  background-color: #03A9F4;
  border-radius: 50%;
  transition: 0.3s ease all;
}

.move .knobs:before
{
  content: attr(data-yes);
}

.move .knobs:after
{
  content: attr(data-no);
}

.move .knobs:after
{
  right: -28px;
  left: auto;
  background-color: #F44336;
}

.move .checkbox:checked + .knobs:before
{
  left: -28px;
}

.move .checkbox:checked + .knobs:after
{
  right: 4px;
}

.move .checkbox:checked ~ .layer
{
  background-color: #fcebeb;
}

/* Up down */
.updown .knobs:before, .updown .knobs:after
{
position: absolute;
top: 4px;
left: 4px;
width: 20px;
height: 10px;
color: #fff;
font-size: 10px;
font-weight: bold;
text-align: center;
line-height: 1;
padding: 9px 4px;
background-color: #03A9F4;
border-radius: 50%;
transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.updown .knobs:before
{
content: attr(data-yes);
}

.updown .knobs:after
{
content: attr(data-no);
}

.updown .knobs:after
{
top: -28px;
right: 4px;
left: auto;
background-color: #F44336;
}

.updown .checkbox:checked + .knobs:before
{
top: -28px;
}

.updown .checkbox:checked + .knobs:after
{
top: 4px;
}

.updown .checkbox:checked ~ .layer
{
background-color: #fcebeb;
}

/* Flip style */
.flip
{
perspective: 60px;
overflow: visible;
}

.flip .knobs:before, .flip .knobs span
{
content: '';
position: absolute;
top: 4px;
left: 4px;
width: 20px;
height: 10px;
color: #fff;
font-size: 10px;
font-weight: bold;
text-align: center;
line-height: 1;
padding: 9px 4px;
border-radius: 50%;
transition: 0.3s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.flip .knobs:before
{
background-color: #03A9F4;
}

.flip .knobs span:before
{
content: attr(data-yes);
}

.flip .knobs:before, .flip .layer
{
transform: rotateY(0);
transform-origin: center;
}

.flip .checkbox:checked + .knobs:before, .flip .checkbox:checked + .knobs span
{
left: 42px;
}

.flip .checkbox:checked + .knobs:before
{
transform: rotateY(180deg);
background-color: #f44336;
}

.flip .checkbox:checked + .knobs span:before
{
content: attr(data-no);
left: 42px;
}

.flip .checkbox:checked ~ .layer
{
background-color: #fcebeb;
transform: rotateY(-180deg);
}

.flip .knobs, .flip .knobs:before, .flip .layer
{
transition: 0.3s ease all;
}

/* Rotate style */
.rotate
{
overflow: visible;
}

.rotate .knobs:before
{
content: attr(data-yes);
position: absolute;
top: 4px;
left: 4px;
width: 20px;
height: 10px;
color: #fff;
font-size: 10px;
font-weight: bold;
text-align: center;
line-height: 1;
padding: 9px 4px;
background-color: #03A9F4;
border-radius: 50%;
}

.rotate .layer, .rotate .knobs, .rotate .knobs:before
{
transform: rotateZ(0);
transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.rotate .checkbox:checked + .knobs
{
transform: rotateZ(-180deg);
}

.rotate .checkbox:checked + .knobs:before
{
content: attr(data-no);
         background-color: #f44336;
transform: rotateZ(180deg);
}

.rotate .checkbox:checked ~ .layer
{
  background-color: #fcebeb;
transform: rotateZ(180deg);
}

/* Fade out */
.fadeout .knobs:before, .fadeout .knobs:after, .fadeout .knobs span
{
position: absolute;
top: 4px;
width: 20px;
height: 10px;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1;
padding: 9px 4px;
         border-radius: 50%;
transition: 0.3s ease all;
}

.fadeout .knobs:before
{
content: attr(data-yes);
color: #fff;
left: 4px;
}

.fadeout .knobs:after
{
content: attr(data-no);
left: 42px;
color: #fff;
       background-color: #f44336;
opacity: 0;
}

.fadeout .knobs:before, .fadeout .knobs:after
{
  z-index: 2;
}

.fadeout .knobs span
{
left: 4px;
      background-color: #03A9F4;
      z-index: 1;
}

.fadeout .checkbox:checked + .knobs:before
{
opacity: 0;
}

.fadeout .checkbox:checked + .knobs:after
{
opacity: 1;
}

.fadeout .checkbox:checked + .knobs span
{
  background-color: #fcebeb;
transform: scale(4);
}

/* Slide all */
.slideall .knobs:before, .slideall .knobs:after, .slideall .knobs span
{
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 50%;
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.slideall .knobs:before
{
    content: attr(data-yes);
    left: 4px;
}

.slideall .knobs:after
{
    content: attr(data-no);
    right: -24px;
}

.slideall .knobs:before, .slideall .knobs:after
{
    color: #fff;
    z-index: 2;
}

.slideall .knobs span
{
    left: 4px;
    background-color: #03a9f4;
    z-index: 1;
}

.slideall .checkbox:checked + .knobs:before
{
    left: -24px;
}

.slideall .checkbox:checked + .knobs:after
{
    right: 4px;
}

.slideall .checkbox:checked + .knobs span
{
    left: 42px;
    background-color: #F44336;
}

.slideall .checkbox:checked ~ .layer
{
    background-color: #fcebeb;
}


</style>
<div class="button r" role="switch" aria-label="CSS Toggle Button" aria-checked="true">
  <input type="checkbox" class="checkbox" aria-label="CSS Toggle Button">
  <div class="knobs" data-yes="✔" data-no="✕"></div>
  <div class="layer"></div>
</div>
`;

  const rectTemplate = document.createElement("template");
  rectTemplate.innerHTML = `
  <style>
  ${commonStyles}
  /* Rectangle Slide  */
.rect-slide .knobs:before, .rect-slide .knobs:after, .rect-slide .knobs span
{
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
}

.rect-slide .knobs:before
{
    content: '';
    left: 4px;
    background-color: #03A9F4;
}

.rect-slide .knobs:after
{
    content: attr(data-no);
    right: 4px;
    color: #4e4e4e;
}

.rect-slide .knobs span
{
    display: inline-block;
    left: 4px;
    color: #fff;
    z-index: 1;
}

.rect-slide .checkbox:checked + .knobs span
{
    color: #4e4e4e;
}

.rect-slide .checkbox:checked + .knobs:before
{
    left: 42px;
    background-color: #F44336;
}

.rect-slide .checkbox:checked + .knobs:after
{
    color: #fff;
}

.rect-slide .checkbox:checked ~ .layer
{
    background-color: #fcebeb;
}

/* Rectangle Flip  */
.rect-flip
{
    overflow: visible;
}

.rect-flip .knobs
{
    perspective: 70px;
}

.rect-flip .knobs:before, .rect-flip .knobs:after, .rect-flip .knobs span
{
    position: absolute;
    top: 4px;
    border-radius: 2px;
}

.rect-flip .knobs:before, .rect-flip .knobs:after
{
    width: 20px;
    height: 10px;
    color: #4e4e4e;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
}

.rect-flip .knobs:before
{
    content: attr(data-yes);
    left: 4px;
}

.rect-flip .knobs:after
{
    content: attr(data-no);
    right: 4px;
}

.rect-flip .knobs span
{
    right: 4px;
    width: 33px;
    height: 28px;
    background-color: #03a9f4;
    transform: rotateY(0);
    transform-origin: 0% 50%;
    transition: 0.6s ease all;
    z-index: 1;
}

.rect-flip .checkbox:checked + .knobs span
{
    transform: rotateY(-180deg);
    background-color: #f44336;
}

.rect-flip .checkbox:checked ~ .layer
{
    background-color: #fcebeb;
}
/* Rectangle Move  */
.rect-move .knobs:before, 
.rect-move .knobs:after, 
.rect-move .knobs span, 
.rect-move .knobs span:before, 
.rect-move .knobs span:after
{
    position: absolute;
    top: 4px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    border-radius: 2px;
    transition: 0.3s ease all;
}

.rect-move .knobs:before
{
    content: attr(data-yes);
    left: 4px;
}

.rect-move .knobs:after
{
    content: attr(data-no)';
    right: 4px;
}

.rect-move .knobs:before, 
.rect-move .knobs:after
{
    width: 27px;
    height: 10px;
    color: #4e4e4e;
    padding: 9px 3px;
    z-index: 1;
}

.rect-move .knobs span
{
    display: inline-block;
    z-index: 2;
}

.rect-move .knobs span, 
.rect-move .knobs span:before, 
.rect-move .knobs span:after
{
    width: 20px;
    height: 10px;
    padding: 9px 4px;
}

.rect-move .knobs span:before, 
.rect-move .knobs span:after
{
    content: '';
    top: 0;
}

.rect-move .knobs span:before
{
    left: -28px;
    background-color: #F44336;
}

.rect-move .knobs span:after
{
    right: -42px;
    background-color: #03A9F4;
}

.rect-move .checkbox:checked + .knobs span:before
{
    left:4px;
}

.rect-move .checkbox:checked + .knobs span:after
{
    right: -74px;
}

.rect-move .checkbox:checked ~ .layer
{
    background-color: #fcebeb;
}
/* Rectangle Hide  */
.rect-hide .knobs:before, .rect-hide .knobs:after, .rect-hide .knobs span
{
    position: absolute;
    top: 4px;
    width: 20px;
    height: 10px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 2px;
    transition: 0.3s ease all;
}

.rect-hide .knobs:before, .rect-hide .knobs:after
{
    color: #4e4e4e;
    z-index: 1;
}

.rect-hide .knobs:before
{
    content: attr(data-yes);
    left: 4px;
}

.rect-hide .knobs:after
{
    content: attr(data-no);
    right: 4px;
}

.rect-hide .knobs span
{
    width: 25px;
    left: 37px;
    background-color: #03A9F4;
    z-index: 2;
}

.rect-hide .checkbox:checked + .knobs span
{
    left: 4px;
    background-color: #F44336;
}

.rect-hide .checkbox:checked ~ .layer
{
    background-color: #fcebeb;
}
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
})();
