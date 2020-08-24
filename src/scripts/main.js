'use strict';

const population = document.querySelectorAll('.population');

const getPopulation = [...population].map(country => country.innerHTML);
const fixNumber = getPopulation.map(number => number.split(',').join(''));

const sumPopulation = fixNumber.reduce((a, b) => Number(a) + Number(b));

const avaragePopulation = sumPopulation / getPopulation.length;

document.querySelector('.total-population')
  .innerHTML = sumPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerHTML = avaragePopulation.toLocaleString('en-US');
