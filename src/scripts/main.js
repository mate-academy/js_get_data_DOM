'use strict';

const allPopulations = [...document.querySelectorAll('.population')]
  .map((el) => {
    const formattedText = el.textContent.trim().replace(/,/g, '');

    return Number(formattedText);
  })
  .filter((el) => !isNaN(el));

const totalPopulation = allPopulations.reduce((sum, pop) => sum + pop, 0);
const averagePopulation = Math.round(totalPopulation / allPopulations.length);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString('en-US');
