'use strict';

const allElementPopulation = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
let totalNumberPopulation = 0;

for (let i = 0; i < allElementPopulation.length; i++) {
  const population = allElementPopulation[i].textContent;
  const populationNumber = Number(population.split(',').join(''));

  totalNumberPopulation += populationNumber;
}

averageElement.textContent = (
  totalNumberPopulation / allElementPopulation.length
).toLocaleString('en-US');
totalElement.textContent = totalNumberPopulation.toLocaleString('en-US');
