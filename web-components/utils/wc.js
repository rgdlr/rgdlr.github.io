"use strict";

export function wc({ wcAttributes, wcCss, wcHtml }) {
  return wcTemplate({ wcAttributes, wcCss, wcHtml });
}

export function wcTemplate({ wcAttributes, wcCss, wcHtml }) {
  // TODO : check "createDocumentFragment()" usage and improvements
  // const fragment = document.createDocumentFragment();
  const template = document.createElement("TEMPLATE");
  template.innerHTML = wcCss(wcAttributes) + wcHtml(wcAttributes);

  return template.content.cloneNode(true);
}
