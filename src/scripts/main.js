'use strict';

const populationElements = document.querySelectorAll('.population');

const populationValues = Array.from(populationElements).map((element) => {
  const populationText = element.textContent.trim();

  return parseInt(populationText.replace(/,/g, ''), 10);
});

const totalPopulation = populationValues.reduce((sum, value) => sum + value, 0);
const averagePopulation = totalPopulation / populationValues.length;

const formatedTotal = totalPopulation.toLocaleString('en-US');
const formatedAverage = averagePopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = formatedAverage;
document.querySelector('.total-population').textContent = formatedTotal;
