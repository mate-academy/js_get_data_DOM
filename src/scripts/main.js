'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = Array.from(populations).reduce((acc, curr) => {
  const population = curr.textContent.split(',').join('');

  return acc + Number(Number.isNaN(Number(population)) ? 0 : population);
}, 0);

document.querySelector('.total-population').textContent =
  totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population').textContent = Math.round(
  totalPopulation / populations.length,
).toLocaleString('en-US');
