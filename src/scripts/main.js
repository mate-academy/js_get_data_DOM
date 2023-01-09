'use strict';

const countOfPopulation = document.querySelectorAll('span.population');

const countofPopulationArray = [...countOfPopulation].map(item =>
  Number(item.innerText.split(',').join('')));

const sumOfPopulation = countofPopulationArray.reduce(
  function(a, b) {
    return a + b;
  },
);

const averageOfPopulation = sumOfPopulation / countofPopulationArray.length;

const total = document.querySelectorAll('span.total-population');

total[0].textContent = `${sumOfPopulation.toLocaleString()}`;

const average = document.querySelectorAll('span.average-population');

average[0].textContent = `${averageOfPopulation.toLocaleString()}`;
