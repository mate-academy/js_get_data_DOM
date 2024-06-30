/* eslint-disable function-paren-newline */
'use strict';

const populationElements = document.querySelectorAll('.population');

const population = Array.from(populationElements, (person) =>
  Number(person.textContent.replace(/(,\s*)+/g, '').trim()),
);

const total = population.reduce((acc, num) => acc + num, 0);
const average = (total / population.length).toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent = average;
