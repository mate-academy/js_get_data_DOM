'use strict';

const countries = [...document.querySelectorAll('span.population')];
const population = countries.map(
  (country) => +country.textContent.trim().replace(/,/g, ''),
);

const total = population.reduce(
  (acumulator, currentValue) => acumulator + currentValue,
  0,
);

const avarage = total / countries.length;

document
  .querySelector('.total-population')
  .replaceWith(total.toLocaleString('en-US'));

document
  .querySelector('.average-population')
  .replaceWith(avarage.toLocaleString('en-US'));
