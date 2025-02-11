'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements).map((element) => {
  const line = element.textContent.trim();
  const number = Number(line.replace(/,/g, ''));

  return isNaN(number) ? 0 : number;
});

const totalPopulation = population.reduce((sum, value) => sum + value, 0);
const avaregePopulation = totalPopulation / population.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  avaregePopulation.toLocaleString();
