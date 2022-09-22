"use-strict";

import { wc } from "../utils/index.js";
import { ATTRIBUTES, wcCss, wcHtml } from "./index.js";

export class WcInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      wc({ wcAttributes: ATTRIBUTES, wcCss, wcHtml, wc: this })
    );
  }

  connectedCallback() {
    if (this.getAttribute(ATTRIBUTES.CLEAN) !== null) {
      this.shadowRoot
        .querySelector(".icon-right")
        .addEventListener("click", () => {
          const clearInput = (input, interval) => {
            if (input.value.length) {
              input.value = input.value.slice(0, -1);
            } else {
              clearInterval(interval);
            }
          };
          const interval = setInterval(
            () => clearInput(this.shadowRoot.querySelector(".input"), interval),
            25
          );
        });
    }
  }

  disconnectedCallback() {
    if (this.getAttribute(ATTRIBUTES.CLEAN) !== null) {
      this.shadowRoot.querySelector(".icon-right").removeEventListener("click");
    }
  }

  attributeChangedCallback(_attributeName, _oldValue, _newValue) {}

  static get observedAttributes() {
    return Object.values(ATTRIBUTES);
  }
}

export function defineWcInput() {
  window.customElements.define("wc-input", WcInput);
}

defineWcInput();
