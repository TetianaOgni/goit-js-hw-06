const input = document.getElementById("name-input");
const spanName = document.getElementById("name-output");

input.addEventListener("input", targetSpanInputHandler);

function targetSpanInputHandler(event) {
  if (event.currentTarget.value !== "") {
    spanName.textContent = event.currentTarget.value;
  }
}
