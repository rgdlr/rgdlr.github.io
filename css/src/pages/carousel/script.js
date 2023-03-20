const carouselsPrevious = document.querySelectorAll(".carousel-previous");
carouselsPrevious.forEach((previous) =>
  previous.addEventListener("click", (event) => {
    const carousel = previous.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    if (!(slideActive && slideActive.previousElementSibling)) {
      return;
    }
    slides.scrollBy({ behavior: "smooth", left: -1, top: -1 });
  })
);

const carouselsNext = document.querySelectorAll(".carousel-next");
carouselsNext.forEach((next) =>
  next.addEventListener("click", (event) => {
    const carousel = next.closest(".carousel");
    const slides = carousel.querySelector(".slides");
    const slideActive = slides.querySelector(".slide.slide--active");
    if (!(slideActive && slideActive.nextElementSibling)) {
      return;
    }
    slides.scrollBy({ behavior: "smooth", left: 1, top: 1 });
  })
);

const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
  const slides = carousel.querySelectorAll(".slide");
  const intersectionObserver = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          slides.forEach((slide) => slide.classList.remove("slide--active"));
          entry.target.classList.add("slide--active");
        }
      }),
    { root: carousel, threshold: 0.5 }
  );
  slides.forEach((slide) => intersectionObserver.observe(slide));
});
