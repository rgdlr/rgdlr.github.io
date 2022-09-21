"use-strict";

import { ATTRIBUTES } from "./wc-input.attributes.js";

export class WcInput extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(
      getTemplate({
        backgroundColor: this.getAttribute(ATTRIBUTES.BACKGROUND_COLOR),
        clean: this.getAttribute(ATTRIBUTES.CLEAN),
        color: this.getAttribute(ATTRIBUTES.COLOR),
        icon: this.getAttribute(ATTRIBUTES.ICON),
        label: this.getAttribute(ATTRIBUTES.LABEL),
        name: this.getAttribute(ATTRIBUTES.NAME),
        placeholder: this.getAttribute(ATTRIBUTES.PLACEHOLDER),
        value: this.getAttribute(ATTRIBUTES.VALUE),
      })
    );
  }

  connectedCallback() {
    if (this.getAttribute(ATTRIBUTES.CLEAN) !== null) {
      this.shadowRoot
        .querySelector(".icon-right")
        .addEventListener("click", () => {
          this.shadowRoot.querySelector(".input").value = "";
        });
    }
  }

  disconnectedCallback() {
    if (this.getAttribute(ATTRIBUTES.CLEAN) !== null) {
      this.shadowRoot.querySelector(".icon-right").removeEventListener("click");
    }
  }

  attributeChangedCallback(_attributeName, _oldValue, _newValue) {}
  static get observedAttributes() {}
}

function getTemplate({
  backgroundColor,
  clean,
  color,
  icon,
  label,
  name,
  placeholder,
  value,
}) {
  const templateCss = `
    <style type="text/css">
      .container {
        background: ${backgroundColor ?? "white"};
        border-radius: 0.25rem;
        border: 1px solid #888;
        color: ${color ?? "#555"};
        display: flex;
        width: max-content;
      }

      .container:has(.input:focus) {
        outline: 1px solid #555;
        outline-offset: 0px;
      }

      .label {
        cursor: text;
        display: block;
        font-size: 0.9rem;
        padding-left: 0.075rem;
      }

      .input {
        background: transparent;
        border: none;
        font-size: 1rem;
        padding-top: 0.15rem;
        outline: none;
        color: inherit;
      }

      .input::placeholder {
        color: inherit;
      }

      .icon {
        align-items: center;
        background-color: #EEE;
        cursor: default;
        display: flex;
        justify-content: center;
        padding: 0.25rem;
        width: 1.5rem;
      }

      .icon-left {
        border-radius: 0.25rem 0rem 0rem 0.25rem;
        border-right: 1px solid #888;
        font-size: 1.2rem;
      }

      .icon-right {
        border-left: 1px solid #888;
        border-radius: 0rem 0.25rem 0.25rem 0rem;
        font-size: 1.5rem;
        font-weight: 300;
      }

      .icon-right:hover {
        background-color: #CCC;
      }

      .wrapper {
        padding: 0.5rem;
      }
    </style>
  `;

  const templateHtml = `
    <div class="container">
      ${icon ? `<span class="icon icon-left">${icon}</span>` : ""}
      <div class="wrapper">
        ${
          label
            ? `<label class="label" for="${name ?? ""}">${label}</label>`
            : ""
        }
        <input
          class="input"
          id="${name ?? ""}"
          name="${name ?? ""}"
          placeholder="${placeholder ?? ""}"
          value="${value ?? ""}"
        />
      </div>
      ${clean !== null ? `<span class="icon icon-right">×</span>` : ""}
    </div>
  `;

  const template = document.createElement("template");
  template.innerHTML = templateCss + templateHtml;

  return template.content.cloneNode(true);
}

export function defineWcInput() {
  window.customElements.define("wc-input", WcInput);
}

defineWcInput();
