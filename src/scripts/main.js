'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [];

populationElements.forEach((element) => {
  const populationNumber = Number(element.textContent.split(',').join(''));

  if (!isNaN(populationNumber)) {
    populations.push(populationNumber);
  }
});

const totalPopulation = populations.reduce(
  (acc, population) => acc + population,
  0,
);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
