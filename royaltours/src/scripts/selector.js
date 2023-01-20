export class Selector {
  static ALL = "all";
  static ATTRIBUTE = "attribute";
  static CLASS = "class";
  static ID = "id";
  static ONE = "one";

  static from = (container) => ({
    all: (selector) => Array.from(container.querySelectorAll(selector)),
    attribute: (key, value) => container.querySelector(`[${key}=${value}]`),
    class: (selector) => container.getElementsByClassName(selector),
    id: (selector) => container.getElementById(selector),
    one: (selector) => container.querySelector(selector),
  });

  static all = (selector) => this.from(window.document).all(selector);
  static attribute = (key, value) => this.from(window.document).attribute(key, value);
  static class = (selector) => this.from(window.document).class(selector);
  static id = (selector) => this.from(window.document).id(selector);
  static one = (selector) => this.from(window.document).one(selector);
  static undefined = this.one;

  static $(selector, option) {
    return this[option](selector);
  }
}

// TODO : $.fromEach(container)(selector)
// TODO : $(selector).from(selector).array(selector) https://www.youtube.com/watch?v=AHdmvGW1oic
export function $(selector) {
  return $.one(selector);
}

$.from = function (container) {
  if (!(container instanceof Node)) {
    throw new Error("Error: container is not valid");
  }

  const from = (selector) => from.one(selector);

  from.all = (selector) => container.querySelectorAll(selector);
  from.array = (selector) => Array.from(from.all(selector));
  from.attribute = (key, value) => container.querySelector(`[${key}=${value}]`);
  from.class = (selector) => container.getElementsByClassName(selector);
  from.id = (selector) => container.getElementById(selector);
  from.one = (selector) => container.querySelector(selector);

  return from;
};

$.all = (selector) => $.from(window.document).all(selector);
$.array = (selector) => $.from(window.document).array(selector);
$.attribute = (key, value) => $.from(window.document).attribute(key, value);
$.class = (selector) => $.from(window.document).class(selector);
$.id = (selector) => $.from(window.document).id(selector);
$.one = (selector) => $.from(window.document).one(selector);
