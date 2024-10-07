'use strict';

// write your code here
const population = [...document.querySelector(`.population`)];
const countCountries = population.length();

population.forEach((item) => {
  return parseInt(item.textContent.split(',').join(''));
});

const total = population.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

const average = total / countCountries;

document.getElementsByClassName(average - population).textContent =
  average.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');
