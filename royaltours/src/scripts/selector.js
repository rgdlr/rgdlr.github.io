export class $ {
  static from = (container) => ({
    all: (selector) => Array.from(container.querySelectorAll(selector)),
    attribute: ([key, value]) => container.querySelector(`[${key}=${value}]`),
    class: (selector) => container.getElementsByClassName(selector),
    id: (selector) => container.getElementById(selector),
    one: (selector) => container.querySelector(selector),
  });

  static ALL = "all";
  static all = (selector) => this.from(window.document).all(selector);

  static ATTRIBUTE = "attribute";
  static attribute = ([key, value]) =>
    this.from(window.document).attribute([key, value]);

  static CLASS = "class";
  static class = (selector) => this.from(window.document).class(selector);

  static ID = "id";
  static id = (selector) => this.from(window.document).id(selector);

  static ONE = "one";
  static one = (selector) => this.from(window.document).one(selector);

  static undefined = this.one;

  static _(selector, option) {
    return this[option](selector);
  }
}
