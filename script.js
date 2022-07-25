// When the user scrolls the page, execute stickyNav
window.onscroll = () => stickyNav();

// Get the navbar
var navbar = document.getElementById("nav-bar");
var about = document.getElementById("about");
var portfolio = document.getElementById("portfolio");
var contact = document.getElementById("contact");

// Get the offset position of the navbar
var navbarOffset = navbar.offsetTop;
var aboutOffset = about.offsetTop;
var portfolioOffset = portfolio.offsetTop;
var contactOffset = contact.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        navbar.children[1].style.backgroundColor = "transparent";
        navbar.children[2].style.backgroundColor = "transparent";
        navbar.children[3].style.backgroundColor = "transparent";
    }
    if (window.pageYOffset >= contactOffset) {
        navbar.children[1].style.backgroundColor = "transparent";
        navbar.children[2].style.backgroundColor = "transparent";
        navbar.children[3].style.backgroundColor = "#A09090";
    } else if (window.pageYOffset >= portfolioOffset) {
        navbar.children[1].style.backgroundColor = "transparent";
        navbar.children[2].style.backgroundColor = "#A09090";
        navbar.children[3].style.backgroundColor = "transparent";
    } else if (window.pageYOffset >= aboutOffset) {
        navbar.children[1].style.backgroundColor = "#A09090";
        navbar.children[2].style.backgroundColor = "transparent";
        navbar.children[3].style.backgroundColor = "transparent";
    }
}