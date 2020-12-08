'use strict';

// write your code here
const population = document.querySelectorAll(`.population`);
let totalPopulationValue = 0;

for (const el of population) {
  totalPopulationValue += +el.innerText.split(`,`).join(``);
}

const averagePopulationValue = totalPopulationValue / population.length;

const totalPopulation = document.querySelector(`.total-population`);
const averagePopulation = document.querySelector(`.average-population`);

totalPopulation.textContent = totalPopulationValue;
averagePopulation.textContent = averagePopulationValue;
