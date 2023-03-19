// TODO : use IntersectionObserver to toggle slide--active

const allPrevious = document.querySelectorAll(".carousel-previous");
allPrevious.forEach((previous) =>
  previous.addEventListener("click", (event) => {
    const carousel = previous.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    if (!(slideActive && slideActive.previousElementSibling)) {
      return;
    }
    slideActive.classList.remove("slide--active");
    slideActive.previousElementSibling.classList.add("slide--active");
    slides.scrollBy({ behavior: "smooth", left: -1, top: -1 });
  })
);

const allNext = document.querySelectorAll(".carousel-next");
allNext.forEach((next) =>
  next.addEventListener("click", (event) => {
    const carousel = next.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    if (!(slideActive && slideActive.nextElementSibling)) {
      return;
    }
    slideActive.classList.remove("slide--active");
    slideActive.nextElementSibling.classList.add("slide--active");
    slides.scrollBy({ behavior: "smooth", left: 1, top: 1 });
  })
);
