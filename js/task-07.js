const inputFontSizeControl = document.getElementById("font-size-control");

const textSizeSpan = document.getElementById("text");

inputFontSizeControl.addEventListener("input", onTargetSpanInput);

function onTargetSpanInput(event) {
  textSizeSpan.style.fontSize = `${event.target.value}px`;
}
