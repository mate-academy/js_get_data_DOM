'use strict';

const population = [...document.querySelectorAll(`.population`)];

const converted = population.map((el) => {
  return Number(el.textContent.split(',').join(''));
});
const total = converted.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const finaleTotal = total.toLocaleString('en-US');

const average = (total / population.length).toLocaleString('en-US');

document.querySelector(`.total-population`).textContent = finaleTotal;
document.querySelector(`.average-population`).textContent = average;
