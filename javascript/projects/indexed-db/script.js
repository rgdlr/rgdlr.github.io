"use strict";

import { ATTRIBUTE, EVENT, IndexedDbTools } from "../../src/js/index.js";

const INPUT = {
  EMPTY: "",
  TYPE: {
    SUBMIT: "submit",
  },
};

const indexedDbForm = window.document.querySelector(".indexed-db-form");
indexedDbForm.addEventListener(EVENT.SUBMIT, (event) => {
  event.preventDefault();

  const form = event.target;
  const formControls = form.elements;
  const formData = new FormData(form);
  const formProps = Object.fromEntries(formData);
  const { language, rating } = formProps;
  // console.log(event, form, formControls, formData, formProps);

  const tr = window.document.createElement("tr");
  tr.innerHTML = `
  <tr class="indexed-db-table-row">
    <td class="indexed-db-table-row-cell data">${language}</td>
    <td class="indexed-db-table-row-cell data">${rating}</td>
    <td class="indexed-db-table-row-cell data edit">Edit</td>
    <td class="indexed-db-table-row-cell data delete">Delete</td>
  </tr>`;
  window.document.querySelector(".indexed-db-table").appendChild(tr);

  Array.from(formControls).forEach((formControl) => {
    if (formControl.getAttribute(ATTRIBUTE.TYPE) !== INPUT.TYPE.SUBMIT) {
      formControl.value = INPUT.EMPTY;
    }
  });
});

// TODO : add sorting, filter, etc.

function indexedDbTest() {
  const name = "store";
  const idb = new IndexedDbTools("idb", 1);
  idb.createObjectStore({ name });
  idb.createObjectStoreObject({
    name,
    object: { key: "key", value: "value" },
  });
  idb.readObjectStoreObject({
    name,
    object: { key: "key" },
    callback: (object) => console.log(object),
  });
  idb.updateObjectStoreObject({
    name,
    object: { key: "key", value: "changed-value" },
  });
  idb.deleteObjectStoreObject({
    name,
    object: { key: "key" },
  });
}

// indexedDbTest();
