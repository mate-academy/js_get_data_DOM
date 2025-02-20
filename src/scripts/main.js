'use strict';

const populations = [...document.querySelectorAll('.population')]
  .map(span => +span.innerText.split(',').join(''));

const totalPopulation = populations.reduce((sum, num) => sum + num, 0);
const avaragePopulation = totalPopulation / populations.length;

document.querySelector('.total-population')
  .innerText = totalPopulation.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerText = avaragePopulation.toLocaleString('en-US');
