var counterEl = document.getElementById("counter");

function count(value, sign) {
  var counter = Number(counterEl.innerText);
  if (sign === 3) {
    counterEl.innerText = counter + value;
  } else {
    counterEl.innerText = counter - value;
  }
}
