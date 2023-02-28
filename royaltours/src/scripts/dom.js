export const dom = {
  id: (id) => window.document.getElementById(id),
  query: (selector) => window.document.querySelector(selector),
  queryAll: (selector) => window.document.querySelectorAll(selector),
  create: (tag, object = {}) => Object.assign(window.document.createElement(tag), object),
  append: (children, parent = window.document.body) =>
    Array.isArray(children)
      ? children.map((element) => parent.appendChild(element))
      : parent.appendChild(children)
};
