'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements)
  .map((el) => {
    const text = el.textContent.replace(/,/g, '').trim();
    const num = Number(text);

    return num;
  })
  .filter((num) => !isNaN(num));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString('en-US');
