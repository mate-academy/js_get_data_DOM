'use strict';

const populations = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populationsTotal = populations.reduce((total, population) => {
  return total + +population.textContent.split(',').join('');
}, 0);

totalElement.textContent = populationsTotal.toLocaleString('en-US');

averageElement.textContent = (
  populationsTotal / populations.length
).toLocaleString('en-US');
