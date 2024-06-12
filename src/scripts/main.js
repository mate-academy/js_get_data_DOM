'use strict';

const allElementPopulation = document.querySelectorAll('.population');
let totalElement = document.querySelector('.total-population');
let averageElement = document.querySelector('.average-population');
let totalNumberPopulation = 0;

for(let i = 0; i < allElementPopulation.length; i++) {
  let population = allElementPopulation[i].textContent;
  let populationNumber = Number(population.split(',').join(''));

  totalNumberPopulation += populationNumber;
}

averageElement.textContent = (totalNumberPopulation / allElementPopulation.length).toLocaleString('en-US');
totalElement.textContent = totalNumberPopulation.toLocaleString('en-US');

