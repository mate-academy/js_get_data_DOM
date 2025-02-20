'use strict';

// write your code here
const population = [...document.querySelectorAll('.population')];
const populationNumber = population.map((item) => {
  const number = [];

  number.push(item.textContent.replace(/,/g, ''));

  return number;
});

const total = populationNumber.reduce(
  (accumulator, currentValue) => accumulator + parseInt(currentValue),
  0,
);

const average = total / populationNumber.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-Us');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
