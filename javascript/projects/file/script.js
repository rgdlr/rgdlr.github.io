"use strict";

import {
  ATTRIBUTE,
  ELEMENT,
  EVENT,
  FileTools,
  initializeModal,
  MODAL,
  NODE,
  openModal,
} from "../../src/js/index.js";

// ------------------------- Modal -------------------------

initializeModal();

function textFileFetcher(fileName, outputElement) {
  const decodeFile = (uInt8Array) => new TextDecoder().decode(uInt8Array.value);
  const outputFile = (textFileContent) => (outputElement.textContent = textFileContent);
  const readFile = (response) => response.body.getReader().read().then(decodeFile).then(outputFile);
  window.fetch(fileName).then(readFile);
}

function openModalWithSourceCode(_event) {
  const modalWindowHeaderFileName = window.document.querySelector(
    ".modal-window-header-title-filenames"
  );
  modalWindowHeaderFileName.textContent = "index.html";
  const modalBody = window.document.querySelector(MODAL.SELECTOR.BODY);
  textFileFetcher("./index.html", modalBody);
  openModal();
}

const openModalButton = window.document.querySelector(".modal-open");
openModalButton.addEventListener(EVENT.CLICK, openModalWithSourceCode);

// ------------------------- FileReader -------------------------

function appendChildToModal(modalBody, child, childIndex) {
  const FIRST_CHILD = 0;
  if (childIndex === FIRST_CHILD) {
    modalBody.replaceChildren(child);
  } else {
    modalBody.appendChild(child);
  }
}

function outputTextFile(event, _file, index, output) {
  const paragraph = window.document.createElement(ELEMENT.P);
  paragraph.innerText = event.target.result;
  appendChildToModal(output, paragraph, index);
  openModal();
}

function outputImageFile(_event, file, index, output) {
  const image = window.document.createElement(ELEMENT.IMG);
  image.setAttribute(ATTRIBUTE.SRC, URL.createObjectURL(file));
  appendChildToModal(output, image, index);
  openModal();
}

function outputVideoFile(_event, file, index, output) {
  // TODO : load video + use progress bar (events: progress, loadend)
  openModal();
}

function readFiles(event, output) {
  const modalHeaderFilenames = window.document.querySelector(
    ".modal-window-header-title-filenames"
  );
  const dropSubtitle = window.document.querySelector(".drop-subtitle");

  Array.from(event.target.files).forEach((file, index) => {
    const fileReader = new window.FileReader();
    const fileInput = new FileTools(file);
    if (!fileInput.isValid) {
      return;
    }
    if (fileInput.isText) {
      fileReader.readAsText(file);
      fileReader.addEventListener(EVENT.LOAD, (event) =>
        outputTextFile(event, file, index, output)
      );
    }
    if (fileInput.isImage) {
      fileReader.readAsDataURL(file);
      fileReader.addEventListener(EVENT.LOAD, (event) =>
        outputImageFile(event, file, index, output)
      );
    }
    if (fileInput.isVideo) {
      fileReader.readAsArrayBuffer(file);
      fileReader.addEventListener(EVENT.LOAD, (event) =>
        outputVideoFile(event, file, index, output)
      );
    }
    modalHeaderFilenames.textContent = `${modalHeaderFilenames.textContent} ${
      modalHeaderFilenames.textContent ? ";" : ""
    } ${file.name}`;
  });
  dropSubtitle.innerHTML = `<i>${modalHeaderFilenames.textContent}</i>`;
}

function fileReader(file, output) {
  file.addEventListener(EVENT.CHANGE, (event) => readFiles(event, output));
}

fileReader(
  window.document.querySelector(".file-input"),
  window.document.querySelector(MODAL.SELECTOR.BODY)
);

// ------------------------- DragAndDrop -------------------------

const dragAndDrop = window.document.querySelector(".drag-and-drop");
function dragOver(event) {
  if (event.target.nodeName !== NODE.LABEL) {
    return;
  }
  event.target.style.opacity = "0.8";
}
function dragLeave(event) {
  if (event.target.nodeName !== NODE.LABEL) {
    return;
  }
  event.target.style.opacity = "1";
}
dragAndDrop.addEventListener(EVENT.DRAG_OVER, dragOver);
dragAndDrop.addEventListener(EVENT.DRAG_LEAVE, dragLeave);
