'use strict';

const populations = [...document.querySelectorAll('span.population')].map(
  (population) => population.textContent,
);

const populationNode = document.querySelector('span.total-population');

const averageNode = document.querySelector('span.average-population');

const total = populations.reduce((initialNumber, currentNumber) => {
  const parsedNumber = parseInt(currentNumber.split(',').join(''));

  return parsedNumber + initialNumber;
}, 0);

const average = total / populations.length;

populationNode.innerHTML = total.toLocaleString('en-US');

averageNode.innerHTML = average.toLocaleString('en-US');
