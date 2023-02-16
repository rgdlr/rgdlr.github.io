AOS.init({ startEvent: 'DOMContentLoaded', once: true, offset: 150, delay: 150 });

function updateSlides() {
  let slideNumber = 0;
  const slide = document.querySelector('.hero-image');
  const slideUrls = [
    'url(./src/assets/images/petrol.jpg)',
    'url(./src/assets/images/fuel.jpg)',
    'url(./src/assets/images/station.jpg)'
  ];
  setInterval(() => {
    slide.style.backgroundImage = slideUrls[slideNumber % 3];
    slideNumber++;
  }, 3300);
}

updateSlides();

// function cropSvg(svgEl) {
//   const bbox = svgEl.getBBox();
//   svgEl.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
// }

// document.querySelectorAll('svg').forEach((svg) => cropSvg(svg));

// const carousel = document.querySelector('#carouselExampleCaptions');
// carousel.addEventListener('click', (_event) => carousel.requestFullscreen());
