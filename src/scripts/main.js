'use strict';

const population =
  [...document.querySelectorAll('.population')]
    .map((el) => el.textContent)
    .map((el) => el.split(',').join(''))
    .reduce((el, acc) => parseInt(el) + parseInt(acc), 0) + '';

const totalPopulation = population;

const averagePopulation = (
  Math.round(totalPopulation / population.length) + ''
).split('');

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalPopulation
  .split('')
  .map((el, index, array) => {
    if (array.length % 2 === 0) {
      if (index === 1) {
        return ',' + el;
      }

      if (index % 3 === 0) {
        return el + ',';
      }
    } else {
      if ((index + 1) % 3 === 0) {
        return el + ',';
      }
    }

    return el;
  })
  .join('')
  .split(',')
  .filter((el) => el !== '')
  .join(',');

average.textContent = averagePopulation
  .map((el, index, array) => {
    if (array.length % 2 === 0) {
      if (index === 1) {
        return ',' + el;
      }

      if (index % 3 === 0) {
        return el + ',';
      }
    } else {
      if ((index + 1) % 3 === 0) {
        return el + ',';
      }
    }

    return el;
  })
  .join('')
  .split(',')
  .filter((el) => el !== '')
  .join(',');
