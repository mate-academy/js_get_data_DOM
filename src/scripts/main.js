'use strict';

const population = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');
const populationNumbers = [];

population.forEach((element) => {
  const populationText = element.textContent;
  const populationNumber = parseInt(populationText.replaceAll(',', ''));

  if (!isNaN(populationNumber)) {
    populationNumbers.push(populationNumber);
  }
});

const total = populationNumbers.reduce((acc, sum) => acc + sum, 0);

totalPopulation.textContent = total.toString();

const average =
  populationNumbers.length > 0 ? total / populationNumbers.length : 'Error';

averagePopulation.textContent = average.toString();
