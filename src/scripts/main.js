'use strict';

const populationCount = document.querySelectorAll('.population');
let totalpopulation = 0;
let countryLength = 0;

for (const span of populationCount) {
  let thisStr = span.textContent;

  thisStr = thisStr.split(',').join('');

  if (!isNaN(Number(thisStr)) && thisStr.trim() !== '') {
    totalpopulation += Number(thisStr);
    countryLength += 1;
  }
}

const averagePopulation = Math.round(totalpopulation / countryLength);

document.querySelector('.total-population').textContent =
  totalpopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
