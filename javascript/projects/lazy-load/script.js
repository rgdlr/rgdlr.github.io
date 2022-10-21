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
  listItemTitle.textContent = description.value;

  const listItemDescription = window.document.createElement(ELEMENT.SPAN);
  listItemDescription.classList.add("card-body-list-item-description");

  if (description.type === "string") {
    listItemDescription.textContent = programmingLanguage[description.key] || "-";
  }
  if (description.type === "array") {
    listItemDescription.textContent =
      programmingLanguage[description.key].reduce(
        (fullDescription, description) =>
          (fullDescription === "" ? fullDescription : `${fullDescription}, `) + description,
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

function getMoreProgrammingLanguages(entries) {
  if (entries[0].isIntersecting) {
    getProgrammingLanguages();
  }
}

let programmingLanguagesTotalRequestAmount = 0;
const intersectionObserver = new window.IntersectionObserver(getMoreProgrammingLanguages);

async function getProgrammingLanguages(
  container = window.document.querySelector(".lazy-load"),
  itemsPerLoad = 4
) {
  // TODO : think about observing footer instead of elements : specific use case?
  // TODO : think about improving behavior
  const programmingLanguagesResponse = await window.fetch("./data/programming-languages.json");
  const { programmingLanguages, descriptions } = await programmingLanguagesResponse.json();
  const documentFragment = window.document.createDocumentFragment();

  for (
    let programmingLanguageIndex = 0;
    programmingLanguageIndex < itemsPerLoad;
    programmingLanguageIndex++
  ) {
    if (programmingLanguages[programmingLanguagesTotalRequestAmount]) {
      const programmingLanguageCard = getProgrammingLanguageCard(
        programmingLanguages[programmingLanguagesTotalRequestAmount],
        descriptions
      );
      documentFragment.appendChild(programmingLanguageCard);
      programmingLanguagesTotalRequestAmount++;
      if (programmingLanguageIndex === itemsPerLoad - 1) {
        intersectionObserver.observe(programmingLanguageCard);
      }
    } else {
      const noMoreElements = document.createElement(ELEMENT.H3);
      noMoreElements.textContent = "No more elements";
      noMoreElements.style.paddingTop = "2rem";
      window.document.querySelector(".main-content").appendChild(noMoreElements);
      intersectionObserver.disconnect();
      break;
    }
  }
  container.appendChild(documentFragment);
}

getProgrammingLanguages();
