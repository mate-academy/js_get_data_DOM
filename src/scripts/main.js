'use strict';

let total = 0;
let average = 0;
const population = [...document.querySelectorAll('.population')];
const populationCount = [];

for (const elem of population) {
  const populationOfCountry = Number(elem.textContent.replaceAll(',', ''));

  if (Number.isFinite(populationOfCountry)) {
    total += populationOfCountry;
    populationCount.push(populationOfCountry);
  }
}

average = populationCount.length > 0 ? total / populationCount.length : 0;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');

// write your code here
