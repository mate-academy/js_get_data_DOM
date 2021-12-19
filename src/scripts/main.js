'use strict';

const arr = document.querySelectorAll('.population');
let values = [...arr].map(a => a.innerText);

values = values.map(a => +a.split('').filter(b => b !== ',').join(''));

const total = values.reduce((a, b) => a + b);
const average = total / values.length;

function convert(value) {
  const num = value.toString().split('');

  let count = 0;

  for (let i = num.length - 1; i >= 0; i--) {
    count++;

    if (count === 3 && i !== 0) {
      num.splice(i, 0, ',');
      count = 0;
    }
  }

  return num.join('');
}

const setTotal = document.querySelector('.total-population');
const setAverage = document.querySelector('.average-population');

setTotal.innerHTML = convert(total);
setAverage.innerHTML = convert(average);
