'use strict';

const nodes = document.querySelectorAll('.population');
const population = Array.from(nodes).map((node) =>
  Number(node.textContent.split(',').join('')),
);

const total = population.reduce((sum, n) => {
  return sum + n;
}, 0);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');

averagePopulation.textContent = (total / population.length).toLocaleString(
  'en-US',
);
