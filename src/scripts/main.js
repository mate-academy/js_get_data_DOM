'use strict';

// write your code here
const populationSpan = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const populations = Array.from(populationSpan).map((span) => span.textContent);

const parsedPopulations = populations
  .map((pop) => {
    const numberString = pop.split(',').join('');
    const number = Number(numberString);

    return isNaN(number) ? null : number;
  })
  .filter((num) => num !== null);

const totalPopulation = parsedPopulations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / parsedPopulations.length;

const formatNumber = (num) => num.toLocaleString();
const formattedTotal = formatNumber(totalPopulation);
const formattedAverage = formatNumber(averagePopulation);

if (totalSpan) {
  totalSpan.textContent = formattedTotal;
}

if (averageSpan) {
  averageSpan.textContent = formattedAverage;
}
