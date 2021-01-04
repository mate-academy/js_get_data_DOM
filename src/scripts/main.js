'use strict';

const population = document.querySelectorAll('.population');
const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');
let sum = 0;

for (const item of population) {
  sum += +item.innerHTML.replaceAll(',', '');
}

const average = Math.round(sum / population.length);

averageEl.innerHTML = average.toLocaleString('en-US');
totalEl.innerHTML = sum.toLocaleString('en-US');
