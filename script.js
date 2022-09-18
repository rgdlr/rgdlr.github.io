// When the user scrolls the page, execute navigation
window.addEventListener("scroll", navigation);

// Get the navbar
var navbar = document.getElementById("nav-bar");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

// Get the offset position of the navbar
var navbarOffsetTop = navbar.offsetTop;
var aboutOffsetTop = about.offsetTop;
var portfolioOffsetTop = portfolio.offsetTop;
var contactOffsetTop = contact.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navigation(_event) {
  const GUARD_OFFSET = 90;
  const SECTION = { HOME: 0, ABOUT: 1, PORTFOLIO: 2, CONTACT: 3 };
  if (window.pageYOffset >= contactOffsetTop - GUARD_OFFSET) {
    navbar.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbar.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbar.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbar.children[SECTION.CONTACT].style.backgroundColor = "#A09090";
  } else if (window.pageYOffset >= portfolioOffsetTop - GUARD_OFFSET) {
    navbar.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbar.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbar.children[SECTION.PORTFOLIO].style.backgroundColor = "#A09090";
    navbar.children[SECTION.CONTACT].style.backgroundColor = "transparent";
  } else if (window.pageYOffset >= aboutOffsetTop - GUARD_OFFSET) {
    navbar.children[SECTION.HOME].style.backgroundColor = "transparent";
    navbar.children[SECTION.ABOUT].style.backgroundColor = "#A09090";
    navbar.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbar.children[SECTION.CONTACT].style.backgroundColor = "transparent";
  } else {
    navbar.children[SECTION.HOME].style.backgroundColor = "#A09090";
    navbar.children[SECTION.ABOUT].style.backgroundColor = "transparent";
    navbar.children[SECTION.PORTFOLIO].style.backgroundColor = "transparent";
    navbar.children[SECTION.CONTACT].style.backgroundColor = "transparent";
    
  }
}
