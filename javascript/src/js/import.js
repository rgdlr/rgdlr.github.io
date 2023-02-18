import { asyncForEach } from "./util.js";

export async function importHtmlElement(dataImport) {
  const pathElement = dataImport.getAttribute("data-import");
  const htmlElement = await fetch(pathElement);
  const htmlText = await htmlElement.text();
  dataImport.outerHTML = htmlText;
}

export async function importHtmlElements() {
  const dataImports = Array.from(document.querySelectorAll("[data-import]"));
  await asyncForEach(dataImports, importHtmlElement);
}

// TODO : recursive import
