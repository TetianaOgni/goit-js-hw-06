const body = document.body;
const button = document.querySelector(".change-color");
const textSpan = document.querySelector(".color");

button.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = `${randomColor}`;
  textSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
