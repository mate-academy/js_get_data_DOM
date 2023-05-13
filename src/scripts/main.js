'use strict';

const populations = [];

document.querySelectorAll('span.population').forEach(
  spanElement => !Number.isNaN(spanElement.textContent)
    ? populations.push(Number(spanElement.textContent.split(',').join('')))
    : undefined
);

const totalPopulation = populations.length > 0
  ? populations.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
  : 0;

const averagePopulation = totalPopulation / populations.length;

document.querySelector('span.average-population').innerHTML = averagePopulation
  .toLocaleString();

document.querySelector('span.total-population').innerHTML = totalPopulation
  .toLocaleString();
