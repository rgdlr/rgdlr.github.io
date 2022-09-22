"use-strict";

export function wcCss(attributes) {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderSize,
    clean,
    color,
    height,
    icon,
    iconBackgroundColor,
    iconColor,
    label,
    labelIn,
    labelOut,
    labelColor,
    name,
    outlineColor,
    outlineOffset,
    outlineSize,
    placeholder,
    placeholderColor,
    type,
    value,
    width,
  } = attributes;

  const css = `
    <style type="text/css">
      :host {
        --background-color: ${backgroundColor ?? "#FFF"};
        --border-color: ${borderColor ?? "#888"};
        --border-radius: ${borderRadius ?? "0rem"};
        --border-size: ${borderSize ?? "1px"};
        --color: ${color ?? "#555"};
        --icon-background-color: ${iconBackgroundColor ?? "#EEE"};
        --icon-color: ${iconColor ?? "#555"};
        --label-color: ${labelColor ?? "#333"};
        --outline-color: ${outlineColor ?? "#555"};
        --outline-offset: ${outlineOffset ?? "0px"};
        --outline-size: ${outlineSize ?? "2px"};
        --placeholder-color: ${placeholderColor ?? "#888"};
        --width: ${width ?? "fit-content"};
      }

      .container {
        background-color: var(--background-color);
        border-radius: var(--border-radius);
        border: var(--border-size) solid var(--border-color);
        box-sizing: border-box;
        display: flex;
        width: var(--width);
      }

      .container:has(.input:focus) {
        outline-offset: var(--outline-offset);
        outline: var(--outline-size) solid var(--outline-color);
      }

      .label-out {
        color: var(--label-color);
        cursor: text;
        display: block;
        font-size: 1rem;
        margin-bottom: 0.25rem;
        padding-left: 0.075rem;
      }

      .label-in {
        color: var(--label-color);
        cursor: text;
        display: block;
        font-size: 0.8rem;
        padding-left: 0.075rem;
      }

      .input {
        background: transparent;
        border: none;
        color: var(--color);
        font-size: 1rem;
        outline: none;
        padding-top: 0.2rem;
        width: 100%;
      }

      .input::placeholder {
        color: var(--placeholder-color);
      }

      .icon {
        align-items: center;
        background-color: var(--icon-background-color);
        color: var(--icon-color);
        cursor: default;
        display: flex;
        font-weight: 600;
        justify-content: center;
        padding: 0.25rem;
        width: 2rem;
      }

      .icon-left {
        border-radius: var(--border-radius) 0rem 0rem var(--border-radius);
      }
      
      .icon-right {
        border-radius: 0rem var(--border-radius) var(--border-radius) 0rem;
      }

      .icon-right:hover {
        filter: brightness(0.955);
      }

      .icon-right:active {
        filter: brightness(1.005);
      }

      .icon-right:focus {
        outline-offset: calc(var(--border-size) + var(--outline-offset));
        outline: var(--outline-size) solid var(--outline-color);
      }

      .wrapper {
        ${
          clean !== null
            ? "border-right: var(--border-size) solid var(--border-color);"
            : ""
        }
        ${
          icon
            ? "border-left: var(--border-size) solid var(--border-color);"
            : ""
        }
        padding: 0.5rem;
        width: 100%;
      }
    </style>
  `;

  return css.replace(/\s{2,}/g, " ");
}
