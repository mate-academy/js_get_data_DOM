'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationData = [];

populationSpans.forEach((element) => {
  const textValue = element.textContent.trim();
  const convertedNumber = Number(textValue.replace(/,/g, ''));

  populationData.push(convertedNumber);
});

const totalPopulation = populationData
  .filter((item) => typeof item === 'number' && !isNaN(item))
  .reduce((sum, current) => sum + current, 0);
const averagePopulation = Math.round(totalPopulation / populationData.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
