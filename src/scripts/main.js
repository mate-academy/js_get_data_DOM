'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const population = populationElements.map((el) => {
  return Number(el.textContent.split(',').join(''));
});

const total = population.reduce((prev, item) => prev + item, 0);

const average = total / population.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
