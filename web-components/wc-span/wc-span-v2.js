"use strict";

import { ATTRIBUTES } from "./wc-span.attributes.js";

export class WcSpanV2 extends HTMLElement {
  constructor() {
    super();

    const style = document.createElement("style");
    style.textContent = `
      span {
        background-color: ${this.getAttribute(ATTRIBUTES.BACKGROUND_COLOR)};
        color: ${this.getAttribute(ATTRIBUTES.COLOR)};
      }
    `;

    const span = document.createElement("span");
    span.textContent = this.getAttribute(ATTRIBUTES.TEXT);

    const shadow = this.attachShadow({ mode: "open" });

    Array.from(this.children).forEach((child) => shadow.appendChild(child));
    shadow.appendChild(style);
    shadow.appendChild(span);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(_attributeName, _oldValue, _newValue) {}
  static get observedAttributes() {}
}

export function defineWcSpanV2() {
  window.customElements.define("wc-span-v2", WcSpanV2);
}

defineWcSpanV2();
