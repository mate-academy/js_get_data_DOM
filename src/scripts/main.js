// 'use strict';

const sorce = [...document.querySelectorAll('span.population')];
const population = [];

sorce.forEach((pop) => {
  const popNumber = pop.innerText.replace(/,/gi, '');

  if (!isNaN(popNumber)) {
    population.push(+popNumber);
  }
});

const totalResult = population.reduce((acc, val) => acc + val);

const totalResultFormated = totalResult
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const averagrResult =
  population.reduce((acc, val) => acc + val) / population.length;

const averagrResultFormated = Math.floor(averagrResult)
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('span.total-population').textContent =
  totalResultFormated;

document.querySelector('span.average-population').textContent =
  averagrResultFormated;
