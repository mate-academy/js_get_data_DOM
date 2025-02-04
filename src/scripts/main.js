'use strict';
/* eslint-disable */

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((el) =>
  Number(el.textContent.replace(/,/g, '')),
);

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const averagePopulation = Math.round(totalPopulation / populations.length);
const formatNumber = (num) => num.toLocaleString();

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = formatNumber(totalPopulation);
averageElement.textContent = formatNumber(averagePopulation);
