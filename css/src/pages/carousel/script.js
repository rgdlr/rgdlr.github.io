const allPrevious = document.querySelectorAll(".carousel-previous");
allPrevious.forEach((previous) =>
  previous.addEventListener("click", (event) => {
    const carousel = previous.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    slides.scrollBy({ behavior: "smooth", left: -1, top: -1 });
  })
);

const allNext = document.querySelectorAll(".carousel-next");
allNext.forEach((next) =>
  next.addEventListener("click", (event) => {
    const carousel = next.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    slides.scrollBy({ behavior: "smooth", left: 1, top: 1 });
  })
);
