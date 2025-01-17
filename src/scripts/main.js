/* eslint-disable no-unused-vars */
'use strict';

const populationElements = document.querySelectorAll('span.population');

const population = Array.from(populationElements).map((element) => {
  const number = parseInt(element.textContent.replace(/,/g, ''));

  return number;
});

const totalPopulation = population.reduce((acc, curr) => acc + curr, 0);
const averagePopulation = Math.round(totalPopulation / population.length);

const formatNumber = (num) => num.toLocaleString('en-US');

// eslint-disable-next-line max-len
// const averageElement = document.querySelector('.average');
// const totalElement = document.querySelector(`.total`);

// averageElement.firstChild.textContent = formatNumber(averagePopulation);

// totalElement.firstChild.textContent = formatNumber(totalPopulation);

const totalElement = document.querySelector('.total .total-population');
const averageElement = document.querySelector('.average .average-population');

totalElement.textContent = formatNumber(totalPopulation);
averageElement.textContent = formatNumber(averagePopulation);
