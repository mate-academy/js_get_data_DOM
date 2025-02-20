'use strict';

const population = document.querySelectorAll('.population');

let totalPopulation = 0;

population.forEach((element) => {
  const populationStr = element.textContent.replace(/,/g, '');
  const populationNum = parseInt(populationStr, 10);

  totalPopulation += populationNum;
});

const averagePopulation = totalPopulation / population.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
