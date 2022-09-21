"use-strict";

import { ATTRIBUTES } from "./wc-span.attributes.js";

export class WcSpanV3 extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(getTemplate());

    this.shadowRoot.querySelector("span").textContent = this.getAttribute(
      ATTRIBUTES.TEXT
    );
    this.shadowRoot.querySelector("span").style.color = this.getAttribute(
      ATTRIBUTES.COLOR
    );
    this.shadowRoot.querySelector("span").style.backgroundColor =
      this.getAttribute(ATTRIBUTES.BACKGROUND_COLOR);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(_attributeName, _oldValue, _newValue) {}
  static get observedAttributes() {}
}

function getTemplate(_params) {
  const template = document.createElement("template");
  const templateCss = `
    <style type="text/css">
      :host {
        background-color: red;
        border: 10px solid red;
      }
      :host(:hover) {
        background-color: blue;
        border: 10px solid blue;
      }
      :host(:active),
      :host(:focus) {
        background-color: green;
        border: 10px solid green;
      }
    </style>`;
  const templateHtml = `<slot name="tag"></slot> <span></span>`;
  template.innerHTML = templateCss + templateHtml;

  return template.content.cloneNode(true);
}

export function defineWcSpanV3() {
  window.customElements.define("wc-span-v3", WcSpanV3);
}

defineWcSpanV3();
