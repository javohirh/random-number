const min = document.querySelector("#min");
const max = document.querySelector("#max");
const btn = document.querySelector(".btn-gen");
const btnReset = document.querySelector(".btn-reset");
const result = document.querySelector(".result");
const resultDiv = document.querySelector(".error");

btn.addEventListener("click", function () {
  if (min.value === "" || max.value === "") {
    result.textContent = "You need to enter something...";
  }
  if (+min.value > +max.value) {
    result.textContent = "Min number must be greater than Max number!";
  } else if (+min.value < +max.value) {
    result.textContent =
      Math.floor(Math.random() * (+max.value - +min.value + 1)) + +min.value;
  }
});

btnReset.addEventListener("click", function () {
  min.value = "";
  max.value = "";
  result.textContent = "";

  resultDiv.removeChild(message);
});
