"use strict";

import { ATTRIBUTE, ELEMENT } from "../../src/js/index.js";

function showDescriptionInCardBodyList(description) {
  const CARD_BODY_LIST = ["filenameExtensions", "firstAppeared", "paradigms", "typingDisciplines"];
  return CARD_BODY_LIST.includes(description.key);
}

function getProgrammingLanguageCardHeader(programmingLanguage) {
  const img = window.document.createElement(ELEMENT.IMG);
  img.classList.add("card-header-icon");
  img.setAttribute(ATTRIBUTE.SRC, programmingLanguage.icon);

  const h3 = window.document.createElement(ELEMENT.H3);
  h3.classList.add("card-header-title");
  h3.textContent = programmingLanguage.name;

  const header = window.document.createElement(ELEMENT.HEADER);
  header.classList.add("card-header");
  header.appendChild(img);
  header.appendChild(h3);

  return header;
}

function getProgrammingLanguageCardBodyListItem(programmingLanguage, description) {
  const listItemTitle = window.document.createElement(ELEMENT.SPAN);
  listItemTitle.classList.add("card-body-list-item-title");
  listItemTitle.textContent = description.name;

  const listItemDescription = window.document.createElement(ELEMENT.SPAN);
  listItemDescription.classList.add("card-body-list-item-description");

  if (description.value === "string") {
    listItemDescription.textContent = programmingLanguage[description.key] || "-";
  }
  if (description.value === "array") {
    listItemDescription.textContent =
      programmingLanguage[description.key].reduce(
        (fullDescription, description) =>
          (fullDescription === "" ? fullDescription : fullDescription + ", ") + description,
        ""
      ) || "-";
  }

  const listItem = window.document.createElement(ELEMENT.LI);
  listItem.classList.add("card-body-list-item");
  listItem.appendChild(listItemTitle);
  listItem.appendChild(listItemDescription);

  return listItem;
}

function getProgrammingLanguageCardBody(programmingLanguage, descriptions) {
  const ul = window.document.createElement(ELEMENT.UL);
  ul.classList.add("card-body-list");
  descriptions.forEach((description) => {
    if (!showDescriptionInCardBodyList(description)) {
      return;
    }
    ul.appendChild(getProgrammingLanguageCardBodyListItem(programmingLanguage, description));
  });

  const body = window.document.createElement(ELEMENT.DIV);
  body.classList.add("card-body");
  body.appendChild(ul);

  return body;
}

function getProgrammingLanguageCardFooter(programmingLanguage) {
  const a = window.document.createElement(ELEMENT.A);
  a.classList.add("card-footer-website");
  a.setAttribute(ATTRIBUTE.HREF, programmingLanguage.website);
  a.setAttribute(ATTRIBUTE.TARGET, "_blank");
  a.textContent = "Website";

  const footer = window.document.createElement(ELEMENT.FOOTER);
  footer.classList.add("card-footer");
  footer.appendChild(a);

  return footer;
}

function getProgrammingLanguageCard(programmingLanguage, descriptions) {
  const cardHeader = getProgrammingLanguageCardHeader(programmingLanguage);
  const cardBody = getProgrammingLanguageCardBody(programmingLanguage, descriptions);
  const cardFooter = getProgrammingLanguageCardFooter(programmingLanguage);

  const article = window.document.createElement(ELEMENT.ARTICLE);
  article.classList.add("card");
  article.appendChild(cardHeader);
  article.appendChild(cardBody);
  article.appendChild(cardFooter);

  return article;
}

async function getProgrammingLanguages() {
  const programmingLanguagesResponse = await window.fetch("./data/programming-languages.json");
  const { programmingLanguages, descriptions } = await programmingLanguagesResponse.json();
  programmingLanguages.forEach((language) => {
    window.document
      .querySelector(".lazy-load")
      .appendChild(getProgrammingLanguageCard(language, descriptions));
  });
}

getProgrammingLanguages();
