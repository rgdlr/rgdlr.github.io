"use strict";

import {} from "../../src/js/index.js";

function getProgrammingLanguageCard(programmingLanguage) {
  const cardInnerHTML = `
    <article class="card">
        <header class="card-header">
            <img class="card-header-icon"
                src="${programmingLanguage.icon}" />
            <h3 class="card-header-title">${programmingLanguage.name}</h3>
        </header>
        <div class="card-body">
            <ul class="card-body-list">
                <li class="card-body-list-item">
                    <span class="card-body-list-item title">First appeared</span>
                    <span class="card-body-list-item description">${
                      programmingLanguage.dates.firstAppeared || "-"
                    }</span>
                </li>
                <li class="card-body-list-item">
                    <span class="card-body-list-item title">Filename extensions</span>
                    <span class="card-body-list-item description">
                        ${
                          programmingLanguage.filenameExtensions.reduce(
                            (filenameExtensions, filenameExtension) =>
                              (filenameExtensions === ""
                                ? filenameExtensions
                                : filenameExtensions + ", ") + filenameExtension,
                            ""
                          ) || "-"
                        }
                    </span>
                </li>
                <li class="card-body-list-item">
                    <span class="card-body-list-item title">Paradigms</span>
                    <span class="card-body-list-item description">
                        ${
                          programmingLanguage.paradigms.reduce(
                            (paradigms, paradigm) =>
                              (paradigms === "" ? paradigms : paradigms + ", ") + paradigm,
                            ""
                          ) || "-"
                        }
                    </span>
                </li>
                <li class="card-body-list-item">
                    <span class="card-body-list-item title">Typing disciplines</span>
                    <span class="card-body-list-item description">
                        ${
                          programmingLanguage.typingDisciplines.reduce(
                            (typingDisciplines, typingDiscipline) =>
                              (typingDisciplines === ""
                                ? typingDisciplines
                                : typingDisciplines + ", ") + typingDiscipline,
                            ""
                          ) || "-"
                        }
                    </span>
                </li>
            </ul>
        </div>
        <footer class="card-footer">
            <a class="card-footer-website" href="${
              programmingLanguage.website || "#"
            }" target="_blank">Website</a>
        </footer>
    </article>
    `;

  // TODO : make correct build + add lazy loading
  const div = window.document.createElement("ELEMENT.DIV");
  div.style.width = "min(25rem, 100%)";
  div.innerHTML = cardInnerHTML;

  return div;
}

async function getProgrammingLanguages() {
  const programmingLanguagesResponse = await window.fetch("./data/programming-languages.json");
  const programmingLanguagesJson = await programmingLanguagesResponse.json();
  programmingLanguagesJson.programmingLanguages.forEach((language) => {
    window.document.querySelector(".lazy-load").appendChild(getProgrammingLanguageCard(language));
  });
  // programmingLanguagesJson.types.forEach((type) => console.log(type.key));
}

getProgrammingLanguages();
