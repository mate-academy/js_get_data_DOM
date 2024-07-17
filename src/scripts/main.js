'use strict';

const population = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');
const populationNumbers = [];

population.forEach((element) => {
  const populationText = element.textContent;
  const populationNumber = parseInt(populationText.split(',').join(''));

  if (!isNaN(populationNumber)) {
    populationNumbers.push(populationNumber);
  }
});

let total = 0;

populationNumbers.forEach((populationNumber) => {
  total += populationNumber;
});

totalPopulation.textContent = total.toString();

let average = 0;

if (populationNumbers.length > 0) {
  average = total / populationNumbers.length;
}

averagePopulation.textContent = average.toString();
