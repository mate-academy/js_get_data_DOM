'use strict';

const populations = document.querySelectorAll('span.population');
const averagePop = document.querySelector('span.average-population');
const totalPop = document.querySelector('span.total-population');

let totalPopulation = 0;

for (const population of populations) {
  totalPopulation += +(population.textContent.replaceAll(',', ''));
}

const averagePopulation = totalPopulation / populations.length;

totalPop.innerText = totalPopulation.toLocaleString();
averagePop.innerText = averagePopulation.toLocaleString();
