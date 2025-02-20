'use strict';

const populationElements = document.querySelectorAll('.population');

const populationsArr = Array.from(populationElements);

function textToNum(el) {
  return Number(el.textContent.replace(/,/g, ''));
}

const populations = populationsArr.map((el) => textToNum(el));

const totalPopulation = populations.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = totalPopulation / populations.length;

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(averagePopulation).toLocaleString();
