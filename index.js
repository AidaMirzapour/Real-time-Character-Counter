let textareaEl = document.getElementById("textarea");
let totalCounterEl = document.querySelector(".total-counter");
let remainingCounterEl = document.querySelector(".remaining-counter");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter();

function updateCounter() {
  let pressCounter = textareaEl.value.length;
  let remainingCounter = textareaEl.getAttribute("maxlength") - pressCounter;

  totalCounterEl.innerHTML = pressCounter;
  remainingCounterEl.innerHTML = remainingCounter;
}
