"use strict";

import { wc, wcAttributes as getWcAttributes } from "../utils/index.js";
import { ATTRIBUTES, wcCss, wcHtml } from "./index.js";

export class WcInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    const wcAttributes = getWcAttributes(ATTRIBUTES, this);
    this.shadowRoot.appendChild(wc({ wcAttributes, wcCss, wcHtml, wc: this }));
  }

  clearInputEvent(event, input) {
    if (![undefined, " ", "Enter"].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const clearInput = (input, interval) => {
      if (input.value.length) {
        input.value = input.value.slice(0, -1);
      } else {
        input.focus();
        clearInterval(interval);
      }
    };
    const interval = setInterval(() => clearInput(input, interval), 25);
  }

  connectedCallback() {
    const inputIconClear = this.shadowRoot.querySelector(".icon-right");
    const input = this.shadowRoot.querySelector(".input");

    if (inputIconClear && this.getAttribute(ATTRIBUTES.CLEAR) !== null) {
      inputIconClear.addEventListener("click", (event) =>
        this.clearInputEvent(event, input)
      );
      inputIconClear.addEventListener("keydown", (event) =>
        this.clearInputEvent(event, input)
      );
    }
  }

  disconnectedCallback() {
    const inputIconClear = this.shadowRoot.querySelector(".icon-right");
    const input = this.shadowRoot.querySelector(".input");

    if (inputIconClear && this.getAttribute(ATTRIBUTES.CLEAR) !== null) {
      inputIconClear.removeEventListener("click", (event) =>
        this.clearInputEvent(event, input)
      );
      inputIconClear.removeEventListener("keydown", (event) =>
        this.clearInputEvent(event, input)
      );
    }
  }

  attributeChangedCallback(_attributeName, _oldValue, _newValue) {
    this.disconnectedCallback();
    const wcAttributes = getWcAttributes(ATTRIBUTES, this);
    this.shadowRoot.replaceChildren(
      wc({ wcAttributes, wcCss, wcHtml, wc: this })
    );
    this.connectedCallback();
  }

  static get observedAttributes() {
    return Object.values(ATTRIBUTES);
  }
}

export function defineWcInput() {
  window.customElements.define("wc-input", WcInput);
}

defineWcInput();
