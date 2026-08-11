// Theme Management
const root = document.documentElement;
const toggle = document.querySelector("[data-theme-toggle]");

let savedTheme = localStorage.getItem("theme");
let theme = savedTheme
  ? savedTheme
  : window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

function getThemeIcon(mode) {
  return mode === "dark"
    ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
    : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

function applyTheme(mode) {
  root.setAttribute("data-theme", mode);
  if (toggle) {
    toggle.setAttribute(
      "aria-label",
      mode === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
    );
    toggle.innerHTML = getThemeIcon(mode);
  }
  localStorage.setItem("theme", mode);
}

applyTheme(theme);

if (toggle) {
  toggle.addEventListener("click", () => {
    theme = theme === "dark" ? "light" : "dark";
    applyTheme(theme);
  });
}

// Mobile Navigation Toggle
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  const hamburgerIcon = navToggle.querySelector(".hamburger-icon");
  const closeIcon = navToggle.querySelector(".close-icon");

  function toggleNavMenu(open) {
    const isOpen = open !== undefined ? open : !navMenu.classList.contains("open");
    navMenu.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    navToggle.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"
    );
    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.style.display = isOpen ? "none" : "block";
      closeIcon.style.display = isOpen ? "block" : "none";
    }
  }

  navToggle.addEventListener("click", () => toggleNavMenu());

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => toggleNavMenu(false));
  });

  document.addEventListener("click", (e) => {
    if (
      navMenu.classList.contains("open") &&
      !navMenu.contains(e.target) &&
      !navToggle.contains(e.target)
    ) {
      toggleNavMenu(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navMenu.classList.contains("open")) {
      toggleNavMenu(false);
    }
  });
}

// Interactive Project Search
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input");
  const clearSearchBtn = document.getElementById("clear-search");
  const projectCards = document.querySelectorAll(".project-card");
  const resultsCount = document.getElementById("results-count");
  const noResultsState = document.getElementById("no-results");
  const resetFilterBtn = document.getElementById("reset-filter-btn");

  let searchQuery = "";

  function filterProjects() {
    let visibleCount = 0;
    const query = searchQuery.trim().toLowerCase();

    projectCards.forEach((card) => {
      const title = card.getAttribute("data-title") || "";
      const desc = card.getAttribute("data-desc") || "";
      const tags = card.getAttribute("data-tags") || "";

      const matchesSearch =
        !query ||
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        tags.toLowerCase().includes(query);

      if (matchesSearch) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (resultsCount) {
      resultsCount.textContent = visibleCount;
    }

    if (noResultsState) {
      if (visibleCount === 0) {
        noResultsState.style.display = "flex";
      } else {
        noResultsState.style.display = "none";
      }
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle("visible", searchQuery.length > 0);
      }
      filterProjects();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        searchInput.focus();
      }
      clearSearchBtn.classList.remove("visible");
      filterProjects();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (
      (e.key === "/" || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k")) &&
      document.activeElement !== searchInput
    ) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    } else if (e.key === "Escape" && document.activeElement === searchInput) {
      if (searchInput.value) {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn?.classList.remove("visible");
        filterProjects();
      }
      searchInput.blur();
    }
  });

  if (resetFilterBtn) {
    resetFilterBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
      }
      if (clearSearchBtn) {
        clearSearchBtn.classList.remove("visible");
      }
      filterProjects();
    });
  }

  filterProjects();
});
