// const counter = document.getElementById("counter");
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const spanCounter = document.getElementById("value");

let counterValue = 0;

buttonDecrement.addEventListener("click", targetButtonDecrementClick);
buttonIncrement.addEventListener("click", targetButtonIncrementClick);

function targetButtonDecrementClick() {
  counterValue -= 1;
  spanCounter.textContent = counterValue;
}
function targetButtonIncrementClick() {
  counterValue += 1;
  spanCounter.textContent = counterValue;
}
