// When the user scrolls the page, execute navigation
window.addEventListener("scroll", navigation);

// Get the navbar
var navbarX = document.getElementById("nav-bar-index");
var navbarY = document.getElementById("nav-bar-mobile-index");

// Get the sections
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

// Get the offset position of the navbar
var navbarOffsetTop = navbarX.offsetTop;

// Get the offset position of the sections
var aboutOffsetTop = about.offsetTop;
var portfolioOffsetTop = portfolio.offsetTop;
var contactOffsetTop = contact.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navigation(_event) {
  const GUARD_OFFSET = 100;
  const SECTION = { HOME: 0, ABOUT: 1, PORTFOLIO: 2, CONTACT: 3 };
  if (window.pageYOffset >= contactOffsetTop - GUARD_OFFSET) {
    navbarX.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarX.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarX.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarX.children[SECTION.CONTACT].style.backgroundColor = "#BBAA88";
    navbarY.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarY.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarY.children[SECTION.CONTACT].style.backgroundColor = "#BBAA88";
  } else if (window.pageYOffset >= portfolioOffsetTop - GUARD_OFFSET) {
    navbarX.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarX.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarX.children[SECTION.PORTFOLIO].style.backgroundColor = "#BBAA88";
    navbarX.children[SECTION.CONTACT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarY.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.PORTFOLIO].style.backgroundColor = "#BBAA88";
    navbarY.children[SECTION.CONTACT].style.backgroundColor = "transparent";
  } else if (window.pageYOffset >= aboutOffsetTop - GUARD_OFFSET) {
    navbarX.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarX.children[SECTION.ABOUT].style.backgroundColor = "#BBAA88";
    navbarX.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarX.children[SECTION.CONTACT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbarY.children[SECTION.ABOUT].style.backgroundColor = "#BBAA88";
    navbarY.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarY.children[SECTION.CONTACT].style.backgroundColor = "transparent";
  } else {
    navbarX.children[SECTION.HOME].style.backgroundColor = "#BBAA88";
    navbarX.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarX.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarX.children[SECTION.CONTACT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.HOME].style.backgroundColor = "#BBAA88";
    navbarY.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbarY.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbarY.children[SECTION.CONTACT].style.backgroundColor = "transparent";
  }
}

// Open hamburger menu
const hamburger = document.querySelector(".nav-bar-mobile-logo-hamburger");
const hamburgerMenu = document.querySelector(".nav-bar-mobile-index");

hamburger.addEventListener("click", (_event) => {
  hamburger.innerHTML = hamburger.innerHTML === "···" ? "x" : "···";
  hamburgerMenu.classList.toggle("open");
});
