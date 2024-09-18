'use strict';

// write your code here
function getPopulation() {
  let population = [...document.querySelectorAll('.population')].map(
    (el) => el.textContent,
  );

  population = population.map((el) => parseInt(el.replace(/,/g, ''), 10));

  return population;
}

function getTotalPopulation() {
  const population = getPopulation();

  return population.reduce((sum, x) => sum + x, 0);
}

function getAveragePopulation() {
  const population = getPopulation();

  return population.reduce((sum, x) => sum + x, 0) / population.length;
}

document.querySelector('.average-population').textContent =
  getAveragePopulation().toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  getTotalPopulation().toLocaleString('en-US');
