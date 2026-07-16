const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");
let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

function icon(mode) {
  return mode === "dark"
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function render(mode) {
  root.setAttribute("data-theme", mode);
  toggle.setAttribute(
    "aria-label",
    mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
  );
  toggle.innerHTML = icon(mode);
}

render(theme);

toggle.addEventListener("click", function () {
  theme = theme === "dark" ? "light" : "dark";
  render(theme);
});

const revealCards = document.querySelectorAll(".reveal-scroll");
let ticking = false;

function updateScroll() {
  const windowHeight = window.innerHeight;
  revealCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const start = windowHeight * 0.85;
    const end = windowHeight * 0.5;
    let progress = (start - rect.top) / (start - end);
    progress = Math.max(0, Math.min(1, progress));
    card.style.opacity = progress;
    card.style.transform = `translateY(${40 * (1 - progress)}px) scale(${0.96 + 0.04 * progress})`;
  });
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll);
    ticking = true;
  }
}

window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll, { passive: true });

updateScroll();
