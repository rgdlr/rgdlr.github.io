export function showSticky(sticky) {
  sticky.classList.add('sticky--show');
}

export function showStickyButtons({ resetBudgetButton, saveBudgetButton }) {
  if (resetBudgetButton) {
    resetBudgetButton.classList.add('sticky__button--show');
  }
  if (saveBudgetButton) {
    saveBudgetButton.classList.add('sticky__button--show');
  }
}
