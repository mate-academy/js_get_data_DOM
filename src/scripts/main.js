'use strict';

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const population = [];

document.querySelectorAll('.population').forEach((item) => {
  const number = Number(item.textContent.replace(/,/g, ''));

  if (!isNaN(number)) {
    population.push(number);
  }
});

const total = population.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

const average = total / population.length;

averagePopulation.innerText = average.toLocaleString('en-US');
totalPopulation.innerText = total.toLocaleString('en-US');
