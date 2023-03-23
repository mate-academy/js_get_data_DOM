'use strict';

const populations = document.querySelectorAll('span.population');
const totalPop = document.querySelector('span.total-population');
const avgPop = document.querySelector('span.average-population');

let totalPopulation = 0;

for (const population of populations) {
  totalPopulation += +(population.textContent.replaceAll(',', ''));
}

let avgPopulation = totalPopulation / populations.length;

totalPop.innerText = totalPopulation.toLocaleString();
avgPop.innerText = avgPopulation.toLocaleString();
