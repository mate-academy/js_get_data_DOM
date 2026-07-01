'use strict';

const populationElements = document.querySelectorAll('.population');
const population = [...populationElements].map((element) => {
  return Number(element.textContent.replace(/,/g, ''));
});

const total = population.reduce((acc, num) => {
  return acc + num;
}, 0);

const average = total / population.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString();

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString();
