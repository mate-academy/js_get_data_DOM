'use strict';

let total = 0;
let average = 0;
let count = 0;

const span = document.querySelectorAll('.population');

for (let elem of span) {
  elem = elem.innerText.split(',').join('');
  total += +elem;
  count++;
}

average = (total / count);

document.querySelector('.total-population').textContent
= total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
= average.toLocaleString('en-US');
