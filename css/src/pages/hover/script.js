const MAX_ROTATION_DEGREES = 35;
const mouseMoves = window.document.querySelectorAll("[data-mousemove]");
const mouseOvers = window.document.querySelectorAll("[data-mouseover]");

// -----

function rotateElementOnMouseMove(event, element) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((mouseX - middleX) / middleX) * MAX_ROTATION_DEGREES;
  const offsetY = ((mouseY - middleY) / middleY) * MAX_ROTATION_DEGREES;

  element.style.setProperty("--rotateX", -offsetY + "deg");
  element.style.setProperty("--rotateY", +offsetX + "deg");
}

document.addEventListener("mousemove", (event) =>
  mouseMoves.forEach((mouseMove) => rotateElementOnMouseMove(event, mouseMove))
);

// -----

function rotateElementOnMouseOver(event, element) {
  const { left, top } = element.getBoundingClientRect();

  const mouseX = event.clientX - left;
  const mouseY = event.clientY - top;

  const middleX = element.offsetWidth / 2;
  const middleY = element.offsetHeight / 2;

  const offsetX = ((mouseX - middleX) / middleX) * MAX_ROTATION_DEGREES;
  const offsetY = ((mouseY - middleY) / middleY) * MAX_ROTATION_DEGREES;

  element.style.setProperty("--rotateX", -offsetY + "deg");
  element.style.setProperty("--rotateY", +offsetX + "deg");
}

mouseOvers.forEach((mouseOver) => {
  mouseOver.addEventListener("mousemove", (event) => rotateElementOnMouseOver(event, mouseOver));
  mouseOver.addEventListener("mouseleave", (event) => {
    mouseOver.style.setProperty("--rotateX", "0deg");
    mouseOver.style.setProperty("--rotateY", "0deg");
  });
});
