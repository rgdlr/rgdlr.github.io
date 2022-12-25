export class $ {
  static ALL = "all";
  static all = (element) =>
    Array.from(window.document.querySelectorAll(element));

  static ATTRIBUTE = "attribute";
  static attribute = ([key, value]) =>
    window.document.querySelector(`[${key}=${value}]`);

  static CLASS = "class";
  static class = (element) => window.document.getElementsByClassName(element);

  static ID = "id";
  static id = (element) => window.document.getElementById(element);

  static ONE = "one";
  static one = (element) => window.document.querySelector(element);

  static undefined = this.one;

  static _(element, option) {
    return this[option](element);
  }
}
