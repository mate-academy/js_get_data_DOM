'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [];

populationElements.forEach(element => {
  const text = element.textContent.trim().replace(/,/g, '');
  const number = Number(text);

  if (!isNaN(number)) {
    populations.push(number);
  }
});

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

const formattedAverage = Math.round(averagePopulation).toLocaleString();
const formattedTotal = totalPopulation.toLocaleString();

averageElement.textContent = formattedAverage;
totalElement.textContent = formattedTotal;

