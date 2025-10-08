'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements).map((element) => {
  const text = element.textContent.replaceAll(',', '');

  return Number(text);
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

const totalFormatted = totalPopulation.toLocaleString();
const averageFormatted = Math.round(averagePopulation).toLocaleString();

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
