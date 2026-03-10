'use strict';

const population = document.querySelectorAll('.population');

const populationNumbers = [];

population.forEach((item) => {
  let text = item.textContent;

  text = text.replaceAll(',', '');

  const number = Number(text);

  if (isNaN(number)) {
    return;
  }

  populationNumbers.push(number);
});

const totalPopulation = populationNumbers.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populationNumbers.length;

const totalFormatted = totalPopulation.toLocaleString('en-US');
const averageFormatted = Math.round(averagePopulation).toLocaleString('en-US');

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
