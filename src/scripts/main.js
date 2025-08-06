'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...populations].reduce(
  (prev, population) => prev + +population.innerHTML.split(',').join(''),
  0,
);

const average = +(total / [...populations].length).toFixed(0);

totalPopulation.innerHTML = separator(total);
averagePopulation.innerHTML = separator(average);

function separator(value) {
  return value.toLocaleString('en-US');
}
