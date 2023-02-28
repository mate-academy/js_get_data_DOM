'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population].reduce((acc, el) => {
  return acc + +(el.textContent.split(',').join(''));
}, 0);

const average = total / population.length;

const getSeparatedNumbers = number => number.toLocaleString('en-US');

totalPopulation.textContent = getSeparatedNumbers(total);
averagePopulation.textContent = getSeparatedNumbers(average);
