'use strict';

const populationElements = document.querySelectorAll('.population');
const populationData = [];

populationElements.forEach((item) => {
  populationData.push(parseInt(item.textContent.replaceAll(',', '')));
});

const totalPopulation = populationData.reduce(
  (accumulator, population) => accumulator + population,
  0,
);
const averagePopulation = totalPopulation / populationData.length;

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();
