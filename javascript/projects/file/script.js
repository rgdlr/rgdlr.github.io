"use strict";

import { EVENT, FileTools } from "../../src/js/index.js";

function textFileFetcher(fileName, outputElement) {
  const decodeFile = (uInt8Array) => new TextDecoder().decode(uInt8Array.value);
  const outputFile = (textFileContent) => (outputElement.textContent = textFileContent);
  const readFile = (response) => response.body.getReader().read().then(decodeFile).then(outputFile);
  window.fetch(fileName).then(readFile);
}

function openModal(_event) {
  const modal = window.document.querySelector(".modal");
  modal.classList.add("open");
}

function closeModal(_event) {
  const modalWindowHeaderFileName = window.document.querySelector(
    ".modal-window-header-files-name"
  );
  modalWindowHeaderFileName.textContent = "";
  const modalWindowBody = window.document.querySelector(".modal-window-body");
  modalWindowBody.textContent = "";
  const modal = window.document.querySelector(".modal");
  modal.classList.remove("open");
}

function openModalWithSourceCode(_event) {
  const modalWindowHeaderFileName = window.document.querySelector(
    ".modal-window-header-files-name"
  );
  modalWindowHeaderFileName.textContent = "index.html";
  const modalWindowBody = window.document.querySelector(".modal-window-body");
  textFileFetcher("./index.html", modalWindowBody);
  openModal();
}

function modalBehavior() {
  const openModalButton = window.document.querySelector(".modal-open-button");
  openModalButton.addEventListener(EVENT.CLICK, openModalWithSourceCode);

  const modalCloseButton = window.document.querySelector(".modal-window-header-close");
  const modalCancelButton = window.document.querySelector(".modal-window-footer-cancel");
  const modalAcceptButton = window.document.querySelector(".modal-window-footer-accept");

  modalCloseButton.addEventListener(EVENT.CLICK, closeModal);
  modalCancelButton.addEventListener(EVENT.CLICK, closeModal);
  modalAcceptButton.addEventListener(EVENT.CLICK, closeModal);
}

modalBehavior();

function textFileReader(file, output) {
  const modalWindowHeaderFileName = window.document.querySelector(
    ".modal-window-header-files-name"
  );
  const dropSubtitle = window.document.querySelector(".drop-subtitle");
  const readFiles = (event) => {
    const outputTextFile = (event) => {
      output.innerHTML = output.innerHTML + `<p>${event.target.result}</p>`;
      openModal();
    };
    const outputImageFile = (event) => {
      output.innerHTML =
        output.innerHTML + `<img src="${event.target.result}" style="height: 100%;" />`;
      openModal();

      // TODO : improve image build and functionality
      // const url = URL.createObjectURL(file);
      // const img = window.document.createElement(ELEMENT.IMG);
      // img.setAttribute(ATTRIBUTE.SRC, url);
      // img.setAttribute(ATTRIBUTE.STYLE, "height: 100%;");
      // output.appendChild(img);
    };
    const outputVideoFile = (event) => {
      // TODO : load video + use progress bar (events: progress, loadend)
      openModal();
    };
    Array.from(event.target.files).forEach((file) => {
      const fileReader = new window.FileReader();
      const fileInput = new FileTools(file);
      if (!fileInput.isValid) {
        return;
      }
      if (fileInput.isText) {
        fileReader.readAsText(file);
        fileReader.addEventListener(EVENT.LOAD, outputTextFile);
      }
      if (fileInput.isImage) {
        fileReader.readAsDataURL(file);
        fileReader.addEventListener(EVENT.LOAD, outputImageFile);
      }
      if (fileInput.isVideo) {
        fileReader.readAsArrayBuffer(file);
        fileReader.addEventListener(EVENT.LOAD, outputVideoFile);
      }
      modalWindowHeaderFileName.textContent = `${modalWindowHeaderFileName.textContent} ${
        modalWindowHeaderFileName.textContent ? ";" : ""
      } ${file.name}`;
    });
    dropSubtitle.innerHTML = `<i>${modalWindowHeaderFileName.textContent}</i>`;
  };
  file.addEventListener(EVENT.CHANGE, readFiles);
}

textFileReader(
  window.document.querySelector(".file-input"),
  window.document.querySelector(".modal-window-body")
);

const dragAndDrop = window.document.querySelector(".drag-and-drop");
function dragOver(event) {
  if (event.target.nodeName !== "LABEL") {
    return;
  }
  event.target.style.opacity = "0.8";
}
function dragLeave(event) {
  if (event.target.nodeName !== "LABEL") {
    return;
  }
  event.target.style.opacity = "1";
}
dragAndDrop.addEventListener(EVENT.DRAG_OVER, dragOver);
dragAndDrop.addEventListener(EVENT.DRAG_LEAVE, dragLeave);
