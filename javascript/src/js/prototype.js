"use strict";

{
  window.console.log(
    "%c</> WITH <3 BY RGDLR",
    `
      background-color: #359;
      color: #A5A;
      font-size: 1.25rem;
      font-weight: bold;
      margin: 0.25rem 0rem;
      padding: 0.25rem 2.25rem;
    `
  );
}

function log(...attributes) {
  const [title, ...restAttributes] = attributes;
  const css = "color: #A5A;";
  window.console.log(`%c${title}`, css, ...restAttributes);
}

{
  class _Object {
    #property;
    constructor(property) {
      this.#property = property;
    }
    get property() {
      return this.#property;
    }
    set property(property) {
      this.#property = property;
    }
    method() {}
  }

  const _object = new _Object("_Object.property");
  const _string = "string";
  const _array = [];
  const _function = function () {};

  const _objectPrototype = _object.prototype;
  const _stringPrototype = _string.prototype;
  const _arrayPrototype = _array.prototype;
  const _functionPrototype = _function.prototype;

  const _objectProto = _object.__proto__;
  const _stringProto = _string.__proto__;
  const _arrayProto = _array.__proto__;
  const _functionProto = _function.__proto__;
  const _functionPrototypeProto = _functionPrototype.__proto__;

  window.console.groupCollapsed("Prototype");
  {
    window.console.groupCollapsed("variables : created variable");
    log("_object", _object);
    log("_string", _string);
    log("_array", _array);
    log("_function", _function);
    window.console.groupEnd();

    window.console.groupCollapsed("prototype : created prototype");
    log("_objectPrototype", _objectPrototype);
    log("_stringPrototype", _stringPrototype);
    log("_arrayPrototype", _arrayPrototype);
    log("_functionPrototype", _functionPrototype);
    window.console.groupEnd();

    window.console.groupCollapsed("__proto__ : inherited prototype");
    log("_objectProto", _objectProto);
    log("_stringProto", _stringProto);
    log("_arrayProto", _arrayProto);
    log("_functionProto", _functionProto);
    log("_functionPrototypeProto", _functionPrototypeProto);
    window.console.groupEnd();
  }
  window.console.groupEnd();
}
