'use strict';

const population = [...document.querySelectorAll('.population')].map(
  (popul) => +popul.innerText.split(',').join(''),
);

const total = population.reduce((acum, currentValue) => acum + currentValue, 0);

const average = total / population.length;

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
