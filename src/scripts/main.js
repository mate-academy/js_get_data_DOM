'use strict';

const population = document.querySelectorAll('.population');

const peoples = [];

for (let i = 0; i < population.length; i++) {
  if (!isNaN(Number(population[i].textContent.split(',').join('')))) {
    peoples.push(Number(population[i].textContent.split(',').join('')));
  } else {
    throw new Error('Sorry, one or few value is not a number!');
  }
}

const totalCount = peoples.reduce((acc, val) => acc + val, 0);

const averageCount = totalCount / peoples.length;

document.querySelector('.total-population').textContent =
  totalCount.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averageCount.toLocaleString('en-US');
