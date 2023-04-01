const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");

function changeBackgroundColor() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;
  const newColor = `rgb(${red}, ${green}, ${blue})`;

  document.body.style.backgroundColor = newColor;
}

redInput.addEventListener("input", changeBackgroundColor);
greenInput.addEventListener("input", changeBackgroundColor);
blueInput.addEventListener("input", changeBackgroundColor);
