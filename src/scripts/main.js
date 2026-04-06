'use strict';

const populationArr = [...document.querySelectorAll('span.population')];
let sumPopul = 0;

for (const el of populationArr) {
  if (isNaN(el.textContent.replaceAll(',', ''))) {
    throw new Error('Population element not a number');
  }
}

for (const el of populationArr) {
  sumPopul += Number(el.textContent.replaceAll(',', ''));
}

const avgPopul = Math.round(sumPopul / populationArr.length);

const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

total.replaceWith(sumPopul.toLocaleString());
average.replaceWith(avgPopul.toLocaleString());
