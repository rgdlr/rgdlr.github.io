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

const modal = {
  accept: window.document.querySelector(MODAL.SELECTOR.ACCEPT),
  body: window.document.querySelector(MODAL.SELECTOR.BODY),
  cancel: window.document.querySelector(MODAL.SELECTOR.CANCEL),
  close: window.document.querySelector(MODAL.SELECTOR.CLOSE),
  footer: window.document.querySelector(MODAL.SELECTOR.FOOTER),
  header: window.document.querySelector(MODAL.SELECTOR.HEADER),
  modal: window.document.querySelector(MODAL.SELECTOR.MODAL),
  open: window.document.querySelector(MODAL.SELECTOR.OPEN),
  title: window.document.querySelector(MODAL.SELECTOR.TITLE),
  window: window.document.querySelector(MODAL.SELECTOR.WINDOW),
};

initializeModal(modal);

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
  openModal(_event, { modal: modal.modal });
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
}

function outputImageFile(_event, file, index, output) {
  const image = window.document.createElement(ELEMENT.IMG);
  image.setAttribute(ATTRIBUTE.SRC, URL.createObjectURL(file));
  appendChildToModal(output, image, index);
}

function outputVideoFile(event, file, index, output) {
  const blobArguments = {
    blobParts: [new Uint8Array(event.target.result)],
    options: { type: "video/mp4" },
  };
  const blob = new Blob(blobArguments.blobParts, blobArguments.options);
  const video = window.document.createElement(ELEMENT.VIDEO);
  video.setAttribute(ATTRIBUTE.SRC, URL.createObjectURL(blob));
  appendChildToModal(output, video, index);
  video.onclick = () => {
    video.currentTime === 0 || video.paused || video.ended ? video.play() : video.pause();
  };
}

function outputDocumentFile(event, file, index, output) {
  const blobArguments = {
    blobParts: [new Uint8Array(event.target.result)],
    options: { type: "application/pdf" },
  };
  const blob = new Blob(blobArguments.blobParts, blobArguments.options);
  const pdf = window.document.createElement(ELEMENT.IFRAME);
  pdf.setAttribute(ATTRIBUTE.SRC, URL.createObjectURL(blob).concat("#toolbar=0"));
  appendChildToModal(output, pdf, index);
}

function readFiles(event, output, loadingBarProgress) {
  // TODO : could use template to append multiple files
  const modalHeaderFilenames = window.document.querySelector(
    ".modal-window-header-title-filenames"
  );
  const dropSubtitle = window.document.querySelector(".drop-subtitle");
  openModal(event, { modal: modal.modal });

  Array.from(event.target.files).forEach((file, index) => {
    const fileReader = new window.FileReader();
    const fileInput = new FileTools(file);
    if (!fileInput.isValid) {
      return;
    }

    fileReader.addEventListener(EVENT.PROGRESS, (event) => {
      loadingBarProgress.classList.remove("hidden");
      const fileProperties = {
        size: file.size,
        progress: { size: event.loaded / file.size, rate: (event.loaded / file.size) * 100 },
      };
      loadingBarProgress.style.width = `${fileProperties.progress.rate}%`;
    });

    if (fileInput.isDocument) {
      fileReader.readAsArrayBuffer(file);
      fileReader.addEventListener(EVENT.LOAD, (event) =>
        outputDocumentFile(event, file, index, output)
      );
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

    fileReader.addEventListener(EVENT.LOAD_END, (_event) =>
      loadingBarProgress.classList.add("hidden")
    );

    modalHeaderFilenames.textContent = `${modalHeaderFilenames.textContent} ${
      modalHeaderFilenames.textContent ? ";" : ""
    } ${file.name}`;
  });
  dropSubtitle.innerHTML = `<i>${modalHeaderFilenames.textContent}</i>`;
}

function fileReader(file, output, loadingBarProgress) {
  file.addEventListener(EVENT.CHANGE, (event) => readFiles(event, output, loadingBarProgress));
}

fileReader(
  window.document.querySelector(".file-input"),
  window.document.querySelector(MODAL.SELECTOR.BODY),
  window.document.querySelector(".loading-bar-progress")
);

// ------------------------- DragAndDrop -------------------------

const dropPreview = window.document.querySelector(".drop-preview");

function drag(event, opacity) {
  event.preventDefault();
  event.target.style.opacity = opacity;
}
dropPreview.addEventListener(EVENT.DRAG_OVER, (event) => drag(event, "0.8"));
dropPreview.addEventListener(EVENT.DRAG_LEAVE, (event) => drag(event, "1"));

function drop(event) {
  event.preventDefault();
  const files = event.dataTransfer.files;
  event.target.files = files;
  readFiles(
    event,
    window.document.querySelector(MODAL.SELECTOR.BODY),
    window.document.querySelector(".loading-bar-progress")
  );
}
dropPreview.addEventListener(EVENT.DROP, drop);
