'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const populations = [...populationElements].map((element) => {
  const text = element.textContent.replaceAll(',', '').trim();
  const number = Number(text);

  return Number.isNaN(number) ? 0 : number;
});

const totalPopulation = populations.reduce((sum, population) => {
  return sum + population;
}, 0);

const averagePopulation = populations.length
  ? Math.round(totalPopulation / populations.length)
  : 0;

totalPopulationElement.textContent = totalPopulation.toLocaleString('en-US');

averagePopulationElement.textContent =
  averagePopulation.toLocaleString('en-US');
