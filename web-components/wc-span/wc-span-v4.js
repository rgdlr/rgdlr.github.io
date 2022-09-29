"use strict";

import { ATTRIBUTES } from "./wc-span.attributes.js";

export class WcSpanV4 extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(getTemplate());
  }

  connectedCallback() {}
  disconnectedCallback() {}

  attributeChangedCallback(attributeName, oldValue, newValue) {
    switch (attributeName) {
      case ATTRIBUTES.BACKGROUND_COLOR:
        this.backgroundColor = newValue;
        break;
      case ATTRIBUTES.COLOR:
        this.color = newValue;
        break;
      case ATTRIBUTES.TEXT:
        this.text = newValue;
        break;
      default:
        this[attributeName] = oldValue;
        break;
    }
  }

  static get observedAttributes() {
    return [ATTRIBUTES.BACKGROUND_COLOR, ATTRIBUTES.COLOR, ATTRIBUTES.TEXT];
  }
}

function getTemplate() {
  const template = document.createElement("template");

  const templateCss = `
    <style type="text/css">
      span {
        outline: none;
        border: none;
        min-height: 2rem;
        min-width: 8rem;
        background-color: #000;
        color: #FFF;
        border-radius: 0.25rem;
      }
      span:hover {
        background-color: #333;
      }
      span:active {
        background-color: #555;
      }
    </style>
  `;

  const templateHtml = `
    <span>
      <slot name="children"></slot>
    </span>
  `;

  template.innerHTML = templateCss + templateHtml;

  return template.content.cloneNode(true);
}

export function defineWcSpanV4() {
  window.customElements.define("wc-span-v4", WcSpanV4);
}

defineWcSpanV4();
