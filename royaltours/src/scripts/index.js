import {
  removeSavedBudget,
  resetBudget,
  saveBudget,
  showSavedBudgetModal,
  updateBudget,
} from "./budget.js";
import { setFooterYear } from "./footer.js";
import { hideModal, showModal } from "./modal.js";
import { $ } from "./selector.js";
import { showSticky, showStickyButtons } from "./sticky.js";

const budgetForm = $.id("budget-form");
const footerYear = $.id("footer__year");
const removeBudgetButton = $.id("remove-budget");
const resetBudgetButton = $.id("reset-budget");
const saveBudgetButton = $.id("save-budget");
const savedBudgetModal = $.id("saved-budget-modal");
const sticky = $.id("sticky");

if (budgetForm) {
  updateBudget(sticky, budgetForm);
  budgetForm.addEventListener("change", (_event) =>
    updateBudget(sticky, budgetForm)
  );
}

if (sticky) {
  showSticky(sticky);
}

if (resetBudgetButton || saveBudgetButton) {
  showStickyButtons({ resetBudgetButton, saveBudgetButton });
  if (resetBudgetButton) {
    resetBudgetButton.addEventListener("click", (_event) =>
      resetBudget(sticky, budgetForm, resetBudgetButton)
    );
  }
  if (saveBudgetButton) {
    saveBudgetButton.addEventListener("click", (_event) =>
      saveBudget(budgetForm, saveBudgetButton)
    );
  }
}

if (savedBudgetModal) {
  showModal(savedBudgetModal, () =>
    showSavedBudgetModal(savedBudgetModal, removeBudgetButton)
  );
  hideModal(savedBudgetModal);
}

if (removeBudgetButton) {
  removeBudgetButton.addEventListener("click", (_event) =>
    removeSavedBudget(savedBudgetModal)
  );
}

if (footerYear) {
  setFooterYear(footerYear);
}
