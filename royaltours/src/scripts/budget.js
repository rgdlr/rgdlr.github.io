import { BASE_PRICE } from "./constant.js";
import { formatCurrency } from "./formatter.js";
import { ICON } from "./icon.js";
import { fetchJson } from "./json.js";
import { $ } from "./selector.js";

const products = await fetchJson("/royaltours/src/data/products.json");
const prices = await fetchJson("/royaltours/src/data/prices.json");

function resetBudgetButtonAnimation(resetBudgetButton) {
  resetBudgetButton.animate(
    [
      {
        transform: "rotateZ(0deg)",
      },
      {
        transform: "rotateZ(-360deg)",
      },
    ],
    { duration: 500, easing: "ease-in-out" }
  );
}

export function resetBudget(sticky, budgetForm, resetBudgetButton) {
  budgetForm.reset();
  resetBudgetButtonAnimation(resetBudgetButton);
  updateBudget(sticky, budgetForm);
}

function saveBudgetButtonAnimation(saveBudgetButton) {
  saveBudgetButton.style.transform = "rotateZ(180deg)";
  saveBudgetButton.style.backgroundColor = "var(--color-secondary-500)";

  setTimeout(() => {
    saveBudgetButton.innerHTML = ICON.CHECK;
    saveBudgetButton.style.transform = "rotateZ(0deg)";
  }, 250);

  setTimeout(() => {
    saveBudgetButton.style.transform = "rotateY(90deg)";
    saveBudgetButton.style.backgroundColor = "var(--color-primary-500)";
  }, 1750);

  setTimeout(() => {
    saveBudgetButton.innerHTML = ICON.SAVE;
    saveBudgetButton.style.transform = "rotateY(0deg)";
  }, 2000);
}

function reduceBudget(currentBudget, product) {
  const { checked, id, type, value } = product;
  const productAmount = Number.parseInt(value);

  if (["checkbox", "radio"].includes(type)) {
    return currentBudget + (checked ? prices[id] : 0);
  } else if (!Number.isNaN(productAmount)) {
    return currentBudget + (value ? productAmount * prices[id] : 0);
  } else {
    return currentBudget;
  }
}

function getBudget(budgetForm) {
  return Array.from(budgetForm).reduce(reduceBudget, BASE_PRICE);
}

function mapBudget(product) {
  const { checked, id, type, value } = product;
  const productAmount = Number.parseInt(value);

  if (["checkbox", "radio"].includes(type)) {
    return { [id]: checked || value === "off" ? prices[id] : 0 };
  } else if (!Number.isNaN(productAmount)) {
    return { [id]: value ? productAmount * prices[id] : 0 };
  } else {
    return { [id]: 0 };
  }
}

export function saveBudget(budgetForm, saveBudgetButton) {
  const budgetToSave = {
    amount: getBudget(budgetForm),
    currency: "EUR",
    products: Array.from(budgetForm).map(mapBudget),
  };

  window.localStorage.setItem("budget", JSON.stringify(budgetToSave));
  saveBudgetButtonAnimation(saveBudgetButton);
}

function setBudget(sticky, amount) {
  const stickyCheckbox = sticky.querySelector(".sticky__checkbox .checkbox");
  const stickyBudget = sticky.querySelector(".sticky__budget");
  stickyBudget.classList.add("sticky__budget--change");
  stickyBudget.addEventListener("transitionend", (_event) => {
    const { checked } = stickyCheckbox;
    stickyBudget.innerHTML = formatCurrency(amount / (checked ? 1 : 1.21));
    stickyBudget.classList.remove("sticky__budget--change");
  });
  stickyCheckbox.addEventListener("change", (_event) => {
    stickyBudget.classList.add("sticky__budget--change");
  });
}

export function updateBudget(sticky, budgetForm) {
  setBudget(sticky, getBudget(budgetForm));
}

function groupProducts(products) {
  return Object.entries(
    products.reduce((productGroups, product) => {
      const productPrice = product[Object.keys(product)[0]];
      if (productPrice === 0) return productGroups;

      const prefix = Object.keys(product)[0].split("__")[0];
      const suffix = Object.keys(product)[0].split("__")[1];
      const formatProduct = { [suffix]: productPrice };

      if (!productGroups[prefix]) {
        productGroups[prefix] = [formatProduct];
      } else {
        productGroups[prefix].push(formatProduct);
      }
      return productGroups;
    }, {})
  );
}

function getModal(budget) {
  const modalBudget = window.document.createElement("div");
  const modalBudgetAmount = window.document.createElement("span");
  const modalBudgetProducts = window.document.createElement("ul");

  modalBudget.classList.add("modal__budget");
  modalBudgetAmount.classList.add("modal__budget-amount");
  modalBudgetAmount.innerText = formatCurrency(budget.amount);
  modalBudgetProducts.classList.add("modal__budget-list");

  const groupedProducts = groupProducts(budget.products);
  groupedProducts.forEach(([currentGroup, currentProducts]) => {
    const modalBudgetItemHeading = window.document.createElement("li");
    modalBudgetItemHeading.classList.add("modal__budget-item");
    modalBudgetItemHeading.classList.add("modal__budget-item--heading");
    modalBudgetItemHeading.innerText = products[currentGroup];

    const modalBudgetList = window.document.createElement("ul");
    modalBudgetList.classList.add("modal__budget-list");

    currentProducts.forEach((product) => {
      const modalBudgetProduct = window.document.createElement("li");
      modalBudgetProduct.classList.add("modal__budget-item");
      modalBudgetProduct.innerText = products[Object.keys(product)[0]];

      modalBudgetList.appendChild(modalBudgetProduct);
    });

    modalBudgetProducts.appendChild(modalBudgetItemHeading);
    modalBudgetProducts.appendChild(modalBudgetList);
  });

  modalBudget.appendChild(modalBudgetAmount);
  modalBudget.appendChild(modalBudgetProducts);

  return modalBudget;
}

export function showSavedBudgetModal(savedBudgetModal, removeBudgetButton) {
  if (!window.localStorage.getItem("budget")) {
    removeBudgetButton.style.display = "none";
    window.document.querySelector(".modal__body").innerText =
      "No se ha guardado ningún presupuesto";
    return;
  } else {
    removeBudgetButton.style.display = "grid";
  }

  const budget = JSON.parse(window.localStorage.getItem("budget"));
  const modalBudget = getModal(budget);

  const modalBudgetBody = savedBudgetModal.querySelector(".modal__body");
  modalBudgetBody.replaceChildren(modalBudget);
}

export function removeSavedBudget(savedBudgetModal) {
  window.localStorage.removeItem("budget");
  window.document.body.classList.remove("body__modal--open");
  savedBudgetModal.classList.add("modal--hidden");
}
