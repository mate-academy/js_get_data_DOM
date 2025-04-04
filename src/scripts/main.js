'use strict';

const populations = document.querySelectorAll('span.population');
const totalPeoples = document.querySelector('span.total-population');
const averagePeoples = document.querySelector('span.average-population');

const populationsInNumbers = [...populations].map(population => {
  return Number(population.textContent.split(',').join(''));
});

const totalValue = populationsInNumbers.reduce(
  (acc, population) => acc + population, 0);
const averageValue = totalValue / populationsInNumbers.length;

totalPeoples.textContent = totalValue.toLocaleString();
averagePeoples.textContent = averageValue.toLocaleString();
