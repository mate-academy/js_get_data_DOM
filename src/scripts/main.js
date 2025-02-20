'use strict';

let total = 0;
let average = 0;

const numbers = [...document.querySelectorAll('span.population')];

const population = numbers.map((item) => item.textContent.replaceAll(',', ''));

for (const number of population) {
  total += Number(number);
}

average = total / population.length;

document.querySelector('span.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('span.average-population').textContent =
  Math.floor(average).toLocaleString('en-US');
