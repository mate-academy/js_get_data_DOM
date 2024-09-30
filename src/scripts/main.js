'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let totalValue = 0;

for (const population of populations) {
  totalValue += +population.innerHTML.replaceAll(',', '');
}

const avarageValue = totalValue / populations.length;

totalPopulation.innerHTML = totalValue.toLocaleString('en-US');
averagePopulation.innerHTML = avarageValue.toLocaleString('en-US');
