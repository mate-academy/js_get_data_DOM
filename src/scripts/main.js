'use strict';

const countriesPopulationElements = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
let total = 0;

for (const countryPopulationElement of countriesPopulationElements) {
  const population = +countryPopulationElement
    .innerHTML
    .split(',')
    .join('');

  total += population;
}

totalElement.innerHTML = total.toLocaleString('en-US');

averageElement.innerHTML = (total / countriesPopulationElements.length)
  .toLocaleString('en-US');
