"use strict";

export const FILE = {
  EXTENSION: {
    AVI: "avi",
    GIF: "gif",
    JPEG: "jpeg",
    JPG: "jpg",
    MOV: "mov",
    MP4: "mp4",
    PDF: "pdf",
    PNG: "png",
    TIFF: "tiff",
    TXT: "txt",
  },
  TYPE: {
    IMAGE: "image",
    DOCUMENT: "document",
    TEXT: "text",
    VIDEO: "video",
  },
};

export const FILES = {
  DOCUMENT: [FILE.EXTENSION.PDF],
  IMAGE: [FILE.EXTENSION.JPEG, FILE.EXTENSION.JPG, FILE.EXTENSION.PNG, FILE.EXTENSION.TIFF],
  TEXT: [FILE.EXTENSION.TXT],
  VIDEO: [FILE.EXTENSION.AVI, FILE.EXTENSION.GIF, FILE.EXTENSION.MOV, FILE.EXTENSION.MP4],
};

export class FileTools {
  constructor(file) {
    this.file = file;
    if (!this.isValid) throw new Error("Invalid file type");
  }
  get isDocument() {
    return StaticFileTools.isDocument(this.file);
  }
  get extension() {
    return StaticFileTools.extension(this.file);
  }
  get isImage() {
    return StaticFileTools.isImage(this.file);
  }
  get isText() {
    return StaticFileTools.isText(this.file);
  }
  get isVideo() {
    return StaticFileTools.isVideo(this.file);
  }
  get isValid() {
    return StaticFileTools.isValid(this.file);
  }
}

export class StaticFileTools {
  static extension(file) {
    return file.name.split(".").pop();
  }
  static isDocument(file) {
    const fileExtension = this.extension(file).toLowerCase();
    return FILES.DOCUMENT.includes(fileExtension);
  }
  static isImage(file) {
    const fileExtension = this.extension(file).toLowerCase();
    return FILES.IMAGE.includes(fileExtension);
  }
  static isText(file) {
    const fileExtension = this.extension(file).toLowerCase();
    return FILES.TEXT.includes(fileExtension);
  }
  static isVideo(file) {
    const fileExtension = this.extension(file).toLowerCase();
    return FILES.VIDEO.includes(fileExtension);
  }
  static isValid(file) {
    return (
      file &&
      (this.isDocument(file) || this.isImage(file) || this.isText(file) || this.isVideo(file))
    );
  }
}

// TODO : create "setAccept" and "setMultiple" for attribute creation when necessary
