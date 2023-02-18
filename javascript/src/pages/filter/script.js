import {} from "../../js/index.js";

const imageInput = document.getElementById("image-input");
const filterSelect = document.getElementById("filter-select");
const imageOutput = document.getElementById("image-output");
const downloadLink = document.getElementById("download-link");
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

imageInput.addEventListener("change", () => {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    imageOutput.src = reader.result;
  });
  reader.readAsDataURL(imageInput.files[0]);
});

filterSelect.addEventListener("change", () => {
  imageOutput.style.filter = filterSelect.value;
});

downloadLink.addEventListener("click", () => {
  const image = new Image();
  image.src = imageOutput.src;
  image.addEventListener("load", () => {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.filter = filterSelect.value;
    ctx.drawImage(image, 0, 0);
    downloadLink.href = canvas.toDataURL();
    downloadLink.download = "filtered-image.png";
  });
});
