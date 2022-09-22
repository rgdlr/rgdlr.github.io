"use-strict";

import { wcAttributes as getWcAttributes } from "./attributes.js";

export function wc({ wcAttributes, wcCss, wcHtml, wc }) {
  return wcTemplate({
    wcAttributes: getWcAttributes(wcAttributes, wc),
    wcCss,
    wcHtml,
    wc,
  });
}

export function wcTemplate({ wcAttributes, wcCss, wcHtml }) {
  const template = document.createElement("template");
  template.innerHTML = wcCss(wcAttributes) + wcHtml(wcAttributes);

  return template.content.cloneNode(true);
}
