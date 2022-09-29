"use strict";

import { ATTRIBUTES } from "./wc-span.attributes.js";

export class WcSpanV1 extends HTMLElement {
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

    // document.head.appendChild(style);
    // document.body.appendChild(style);

    this.appendChild(style);
    this.appendChild(span);
  }

  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallback(_attributeName, _oldValue, _newValue) {}
  static get observedAttributes() {}
}

export function defineWcSpanV1() {
  window.customElements.define("wc-span-v1", WcSpanV1);
}

defineWcSpanV1();
