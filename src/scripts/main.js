'use strict';

const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements).map(
  // eslint-disable-next-line
    (el) => +el.textContent.replace(/,/g, '')
);

const totalPopulation = populations.reduce((acc, num) => acc + num, 0);

const averagePopulation = totalPopulation / populations.length;

const totalPopSpan = document.querySelector('span.total-population');
const averagePopSpan = document.querySelector('span.average-population');

const formatWithCommas = (num) => num.toLocaleString('en-US');

totalPopSpan.textContent = formatWithCommas(totalPopulation);
averagePopSpan.textContent = formatWithCommas(averagePopulation);
