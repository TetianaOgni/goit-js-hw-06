const textInput = document.getElementById("validation-input");

textInput.addEventListener("blur", onTargettextInputBlur);

function onTargettextInputBlur(event) {
  const inputValutLenght = event.target.value.length;
  const validLenght = Number(textInput.dataset.length);

  if (inputValutLenght === validLenght) {
    textInput.classList.add("valid");
    return;
  }

  textInput.classList.add("invalid");
}
