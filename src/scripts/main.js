'use strict';

const population = [...document.querySelectorAll('.population')];
const totalP = document.querySelector('.total-population');
const averageP = document.querySelector('.average-population');

const populationNumbers = [];

population.forEach((span) => {
  const populationString = span.textContent;
  const cleanedString = populationString.replace(/,/g, '');
  const numberOfPopulation = parseInt(cleanedString, 10);

  if (!isNaN(numberOfPopulation)) {
    populationNumbers.push(numberOfPopulation);
  }
});

const totalPopulation = populationNumbers.reduce((acc, num) => acc + num, 0);

const averagePopulation =
populationNumbers.length > 0 ? totalPopulation / populationNumbers.length : 0;

const formattedTotal = totalPopulation.toLocaleString();
const formattedAverage = averagePopulation.toLocaleString();

totalP.textContent = formattedTotal;
averageP.textContent = formattedAverage;
