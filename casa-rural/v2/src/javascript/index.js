AOS.init({ startEvent: 'DOMContentLoaded', once: true, offset: 125, delay: 75 });

function cropSvg(svgEl) {
  const bbox = svgEl.getBBox();
  svgEl.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
}

document.querySelectorAll('svg').forEach((svg) => cropSvg(svg));

// const carousel = document.querySelector('#rooms-carousel');
// carousel.addEventListener('click', (_event) => carousel.requestFullscreen());

function highlightCarouselText(params) {
  const carouselItems = document.querySelectorAll('.carousel-item');

  const observer = new MutationObserver((mutation) => {
    mutation.forEach((entry) => {
      const dataCarouselText = document.querySelector(`[data-carousel-text="aire-acondicionado"]`);
      dataCarouselText.style.color = '';
    });
    mutation.forEach((entry) => {
      const dataCarouselImage = entry.target.getAttribute('data-carousel-image');
      const dataCarouselText = document.querySelector(
        `[data-carousel-text="${dataCarouselImage}"]`
      );
      if (entry.target.classList.contains('active')) {
        dataCarouselText.style.color = '#F00';
      }
    });
  });

  carouselItems.forEach((carouselItem) => {
    observer.observe(carouselItem, { attributes: true });
  });
}
