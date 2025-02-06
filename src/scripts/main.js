'use strict';

const information = [];

document.querySelectorAll('.population').forEach((population) => {
  // eslint-disable-next-line use-isnan
  if (parseInt(population.textContent) !== NaN) {
    const number = Number(population.textContent.trim().replaceAll(',', ''));

    information.push(number);
  }
});

const total = information.reduce((sum, x) => sum + x, 0);
const average = total / information.length;
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
