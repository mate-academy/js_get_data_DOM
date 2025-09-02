'use strict';

let total = 0;
let average = 0;
const population = [...document.querySelectorAll('.population')];

for (const elem of population) {
  total += Number(elem.textContent.replaceAll(',', ''));
}

average = total / population.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');

// write your code here
