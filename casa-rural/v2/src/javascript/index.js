AOS.init({ startEvent: 'DOMContentLoaded', once: true });

function cropSvg(svgEl) {
  const bbox = svgEl.getBBox();
  svgEl.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
}

document.querySelectorAll('svg').forEach((svg) => cropSvg(svg));

// const carousel = document.querySelector('#carouselExampleCaptions');
// carousel.addEventListener('click', (_event) => carousel.requestFullscreen());
