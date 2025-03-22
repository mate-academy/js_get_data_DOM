'use strict';

let population = [...document.querySelectorAll('span.population')];

population = population.map((element) => {
  return Number(element.textContent.split(',').join(''));
});

const totalPopulation = population.reduce((sum, pop) => sum + pop, 0);
const averagePopulation = Math.round(totalPopulation / population.length);

function numWithCommas(num) {
  const numStr = num.toString();
  let j = 0;
  let result = '';

  for (let i = numStr.length - 1; i >= 0; i--) {
    result = numStr[i] + result;
    j++;

    if (j % 3 === 0 && i !== 0) {
      result = ',' + result;
    }
  }

  return result;
}

document.querySelector('span.total-population').textContent =
  numWithCommas(totalPopulation);

document.querySelector('span.average-population').textContent =
  numWithCommas(averagePopulation);
