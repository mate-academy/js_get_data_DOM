'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (elem) => parseInt(elem.textContent.replace(/,/g, '')),
  10,
);

const total = population.reduce((acc, value) => acc + value);

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent = (
  total / population.length
).toLocaleString('en-US');
