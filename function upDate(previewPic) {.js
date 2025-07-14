function upDate(previewPic) {
  console.log("Mouse entered image:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const displayArea = document.getElementById("image");
  displayArea.style.backgroundImage = `url('${previewPic.src}')`;
  displayArea.textContent = previewPic.alt;
}

function undo() {
  console.log("Mouse left image");

  const displayArea = document.getElementById("image");
  displayArea.style.backgroundImage = "url('')";
  displayArea.textContent = "Hover over an image below to display here.";
}
