// When user scrolls the page, updates navigation active element - could be done using IntersectionObserver
{
  const GUARD_OFFSET = 100;
  const SECTION = { HOME: 0, ABOUT: 1, PORTFOLIO: 2, CONTACT: 3 };

  const navigationBars = [
    document.getElementById("nav-bar-index"),
    document.getElementById("nav-bar-mobile-index"),
  ];

  const aboutOffsetTop = about.offsetTop;
  const portfolioOffsetTop = portfolio.offsetTop;
  const contactOffsetTop = contact.offsetTop;

  function setNavigationActiveElement(navigationBars, navigationElementIndex) {
    navigationBars.forEach(({ children }) =>
      Array.from(children).forEach((element, index, _array) => {
        element.style.backgroundColor =
          index === navigationElementIndex ? "#BBAA88" : "transparent";
      })
    );
  }

  function updateNavigationActiveElement(_event) {
    if (window.pageYOffset >= contactOffsetTop - GUARD_OFFSET) {
      setNavigationActiveElement(navigationBars, SECTION.CONTACT);
    } else if (window.pageYOffset >= portfolioOffsetTop - GUARD_OFFSET) {
      setNavigationActiveElement(navigationBars, SECTION.PORTFOLIO);
    } else if (window.pageYOffset >= aboutOffsetTop - GUARD_OFFSET) {
      setNavigationActiveElement(navigationBars, SECTION.ABOUT);
    } else {
      setNavigationActiveElement(navigationBars, SECTION.HOME);
    }
  }

  window.addEventListener("scroll", updateNavigationActiveElement);
}

// Open hamburger menu
{
  const hamburger = document.querySelector(".nav-bar-mobile-logo-hamburger");
  const hamburgerMenu = document.querySelector(".nav-bar-mobile-index");

  hamburger.addEventListener("click", (_event) => {
    hamburger.innerHTML = hamburger.innerHTML === "···" ? "x" : "···";
    hamburgerMenu.classList.toggle("open");
  });
}

// Dynamic footer
{
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}
