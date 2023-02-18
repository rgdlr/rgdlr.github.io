"use strict";

import { ATTRIBUTE, ELEMENT, EVENT, IndexedDbTools } from "../../js/index.js";

const INPUT = {
  EMPTY: "",
  PLACEHOLDER: {
    LANGUAGE: "Language",
  },
  TYPE: {
    SUBMIT: "submit",
  },
};

const INDEXED_DB = {
  DATABASE: "rgdlr",
  STORE: "languages",
  VERSION: 1,
};

const indexedDbInputLanguage = window.document.querySelector(".indexed-db-form-input.language");
const indexedDbInputRating = window.document.querySelector(".indexed-db-form-input.rating");
const indexedDbTableBody = window.document.querySelector(".indexed-db-table-body");

function getTableRow({ key, value }) {
  const _tableRowInnerHTML = `
  <tr class="indexed-db-table-row">
    <td class="indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-language">${key}</td>
    <td class="indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-rating">${value}</td>
    <td class="indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-edit">Edit</td>
    <td class="indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-delete">Delete</td>
  </tr>`;

  const tr = window.document.createElement(ELEMENT.TR);
  const tdLanguage = window.document.createElement(ELEMENT.TD);
  const tdRating = window.document.createElement(ELEMENT.TD);
  const tdEdit = window.document.createElement(ELEMENT.TD);
  const tdDelete = window.document.createElement(ELEMENT.TD);

  tr.classList = "indexed-db-table-row";
  tdLanguage.classList =
    "indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-language";
  tdRating.classList =
    "indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-rating";
  tdEdit.classList =
    "indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-edit";
  tdDelete.classList =
    "indexed-db-table-row-cell indexed-db-table-row-cell-data indexed-db-table-row-cell-delete";

  tdLanguage.textContent = key;
  tdRating.textContent = value;
  tdEdit.textContent = "Edit";
  tdDelete.textContent = "Delete";

  const editEntry = (_event) => {
    indexedDbInputLanguage.value = tdLanguage.textContent;
    indexedDbInputRating.value = tdRating.textContent;

    indexedDbInputRating.focus();
  };

  const removeEntry = (_event) => {
    const indexedDb = new IndexedDbTools(INDEXED_DB.DATABASE, INDEXED_DB.VERSION);
    const object = { key: tdLanguage.textContent, value: tdRating.textContent };
    indexedDb.deleteObjectStoreObject({ name: INDEXED_DB.STORE, object });

    tdEdit.removeEventListener(EVENT.CLICK, editEntry);
    tdDelete.removeEventListener(EVENT.CLICK, removeEntry);

    Array.from(indexedDbTableBody.children).forEach((child) => child.remove());
    initializeTableFromIndexedBb();

    indexedDbInputLanguage.focus();
  };

  tdEdit.addEventListener(EVENT.CLICK, editEntry);
  tdDelete.addEventListener(EVENT.CLICK, removeEntry);

  tr.appendChild(tdLanguage);
  tr.appendChild(tdRating);
  tr.appendChild(tdEdit);
  tr.appendChild(tdDelete);

  return tr;
}

function initializeTableFromIndexedBb() {
  const indexedDb = new IndexedDbTools(INDEXED_DB.DATABASE, INDEXED_DB.VERSION);
  indexedDb.createObjectStore({ name: INDEXED_DB.STORE });
  const fragment = window.document.createDocumentFragment();
  indexedDb.readObjectStoreObject({
    name: INDEXED_DB.STORE,
    callback: (object) => fragment.appendChild(getTableRow(object)),
    callbackAfterRead: () => indexedDbTableBody.appendChild(fragment),
  });
}

initializeTableFromIndexedBb();

const indexedDbForm = window.document.querySelector(".indexed-db-form");
indexedDbForm.addEventListener(EVENT.SUBMIT, (event) => {
  event.preventDefault();

  const form = event.target;
  const formControls = form.elements;
  const formData = new FormData(form);
  const formProperties = Object.fromEntries(formData);
  const { language, rating } = formProperties;

  const indexedDb = new IndexedDbTools(INDEXED_DB.DATABASE, INDEXED_DB.VERSION);
  indexedDb.updateObjectStoreObject({
    name: INDEXED_DB.STORE,
    object: { key: language, value: rating },
  });

  Array.from(indexedDbTableBody.children).forEach((child) => child.remove());
  initializeTableFromIndexedBb();

  Array.from(formControls).forEach((formControl) => {
    if (formControl.getAttribute(ATTRIBUTE.TYPE) !== INPUT.TYPE.SUBMIT) {
      formControl.value = INPUT.EMPTY;
    }
  });
  indexedDbInputLanguage.focus();
});

// TODO : add sorting, filter, etc.
