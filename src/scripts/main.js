'use strict';

const populationElements = document.querySelectorAll('.population');

const populationNumbers = Array.from(populationElements).map((element) => {
  const text = element.textContent;

  return Number(text.replaceAll(',', ''));
});

const totalPopulation = populationNumbers.reduce((total, number) => {
  return total + number;
}, 0);

const averagePopulation = totalPopulation / populationNumbers.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');

averageElement.textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
