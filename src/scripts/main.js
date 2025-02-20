'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population].reduce((sum, p) => {
  const value = +p.textContent.split(',').join('');

  return sum + value;
}, 0);

const average = (total / population.length).toLocaleString('en-US');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average;
