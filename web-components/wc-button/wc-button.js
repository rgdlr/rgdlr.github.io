"use strict";

import { ATTRIBUTES } from "./wc-button.attributes.js";

export class WcButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      getTemplate({
        backgroundColor: this.getAttribute(ATTRIBUTES.BACKGROUND_COLOR),
        children: this.children,
        color: this.getAttribute(ATTRIBUTES.COLOR),
        height: this.getAttribute(ATTRIBUTES.HEIGHT),
        value: this.getAttribute(ATTRIBUTES.VALUE),
        width: this.getAttribute(ATTRIBUTES.WIDTH),
      })
    );
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
      case ATTRIBUTES.HEIGHT:
        this.height = newValue;
        break;
      case ATTRIBUTES.TEXT:
        this.text = newValue;
        break;
      case ATTRIBUTES.WIDTH:
        this.width = newValue;
        break;
      default:
        this[attributeName] = oldValue;
        break;
    }
  }

  static get observedAttributes() {
    return [
      ATTRIBUTES.BACKGROUND_COLOR,
      ATTRIBUTES.COLOR,
      ATTRIBUTES.HEIGHT,
      ATTRIBUTES.TEXT,
      ATTRIBUTES.WIDTH,
    ];
  }
}

function getTemplate({
  backgroundColor,
  children,
  color,
  height,
  value,
  width,
}) {
  const templateCss = `
    <style type="text/css">
      button {
        background-color: ${backgroundColor ?? "#000"};
        border-radius: 0.25rem;
        border: none;
        color: ${color ?? "#FFF"};
        font-size: 1rem;
        min-height: ${height ?? "3rem"};
        min-width: ${width ?? "10rem"};
        outline: none;
      }
      button:hover {
        filter: brightness(0.95);
      }
      button:active {
        filter: brightness(1.05);
      }
    </style>
  `;

  const templateHtml = `
    <button>
      ${children.length ? `<slot name="children"></slot>` : value ?? ""}
    </button>
  `;

  const template = document.createElement("template");
  template.innerHTML = templateCss + templateHtml;

  return template.content.cloneNode(true);
}

export function defineWcButton() {
  window.customElements.define("wc-button", WcButton);
}

defineWcButton();
