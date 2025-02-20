'use strict';

const collection = document.querySelectorAll('.population');

const population = [...collection].map((item) => {
  return Number(item.innerText.split(',').join(''));
});

const totalPopulation = population.reduce((initial, item) => initial + item, 0);
const avgPopulation = totalPopulation / population.length;

document.querySelector('.average-population').innerText =
  Math.round(avgPopulation).toLocaleString('en-US');

document.querySelector('.total-population').innerText =
  totalPopulation.toLocaleString('en-US');
