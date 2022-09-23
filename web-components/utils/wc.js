"use-strict";

export function wc({ wcAttributes, wcCss, wcHtml }) {
  return wcTemplate({ wcAttributes, wcCss, wcHtml });
}

export function wcTemplate({ wcAttributes, wcCss, wcHtml }) {
  const template = document.createElement("template");
  template.innerHTML = wcCss(wcAttributes) + wcHtml(wcAttributes);

  return template.content.cloneNode(true);
}
