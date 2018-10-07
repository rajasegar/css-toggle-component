(function() {
  console.log("hello world");
  const template = document.createElement("template");
  template.innerHTML = `
  <style>

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
  class CSSToggle extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));
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
      const addSpan = ["flip", "fadeout", "slideall"];
      if (addSpan.includes(theme)) {
        const span = document.createElement("span");
        span.setAttribute("data-yes", onLabel);
        span.setAttribute("data-no", offLabel);
        knobs.appendChild(span);
      }
    }
  }

  window.customElements.define("css-toggle", CSSToggle);
})();
