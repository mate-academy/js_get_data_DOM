'use strict';

const populations = document.querySelectorAll('.population');

const populationValues = [];

populations.forEach((population) => {
  populationValues.push(+population.innerHTML.split(',').join(''));
});

const totalPopulation = populationValues.reduce(
  (acc, number) => acc + number,
  0,
);

const averagePopulation = totalPopulation / populationValues.length;

const thousandsSeparator = (number) => number.toLocaleString();

document.querySelector('.average-population').textContent =
  thousandsSeparator(averagePopulation);
document.querySelector('.total-population').textContent =
  thousandsSeparator(totalPopulation);
