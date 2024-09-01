'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalValue = 0;

for (const population of populations) {
  population.innerHTML = population.innerHTML.replaceAll(',', '');

  totalValue += +population.innerHTML;
}

const avarageValue = totalValue / populations.length;

totalPopulation.innerHTML = totalValue.toLocaleString('en-US');
averagePopulation.innerHTML = avarageValue.toLocaleString('en-US');
