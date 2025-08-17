'use strict';

const population = document.querySelectorAll('.population');

let totalPopulation = 0;
const populations = [];

population.forEach((node) => {
  const cleanText = node.textContent.replace(/,/g, '');

  if (!isNaN(cleanText) && cleanText.trim() !== '') {
    const value = Number(cleanText);

    totalPopulation += value;
    populations.push(value);
  }
});

const totalPopulationElement = document.querySelector('.total-population');

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

if (populations.length > 0) {
  const averagePopulation = totalPopulation / populations.length;
  const avrgPopulationElement = document.querySelector('.average-population');

  avrgPopulationElement.textContent =
    Math.round(averagePopulation).toLocaleString('en-US');
}
