"use-strict";

export function wcHtml(attributes) {
  const {
    backgroundColor,
    borderColor,
    borderRadius,
    borderSize,
    clear,
    color,
    height,
    icon,
    iconBackgroundColor,
    iconBorderColor,
    iconBorderSize,
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

  const html = `
    ${
      label && (labelIn === null || labelOut !== null)
        ? `<label class="label label-out" for="${name ?? ""}">${label ?? ""}</label>`
        : ""
    }
    <div class="container">
      ${icon ? `<span class="icon icon-left">${icon ?? ""}</span>` : ""}
      <div class="wrapper">
        ${
          label && labelIn !== null
            ? `<label class="label label-in" for="${name ?? ""}">${
                label ?? ""
              }</label>`
            : ""
        }
        <input
          class="input"
          id="${name ?? ""}"
          name="${name ?? ""}"
          placeholder="${placeholder ?? ""}"
          type="${type ?? ""}"
          value="${value ?? ""}"
        />
      </div>
      ${
        clear !== null
          ? `<span class="icon icon-right" tabindex="0">×</span>`
          : ""
      }
    </div>
  `;

  return html.replace(/\s{2,}/g, " ");
}
