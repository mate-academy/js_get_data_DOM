'use strict';

const population = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const countries = document.querySelectorAll('.list__item');

const totalPopulation = population
  .map(country => +country.innerHTML.split(',').join(''))
  .reduce((a, b) => a + b, 0);

const averagePopulation = totalPopulation / countries.length;

function numToValidString(num) {
  const sep = (str) => {
    return str.length
      ? [str.slice(0, 3), ...sep(str.slice(3))]
      : [];
  };

  const validNum = sep(String(num)
    .split('')
    .reverse()
    .join(''))
    .reverse()
    .join(',');

  return validNum;
}

total.innerHTML = numToValidString(totalPopulation);
average.innerHTML = numToValidString(averagePopulation);
