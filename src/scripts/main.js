'use strict';

const populations = document.querySelectorAll('.population');
const popArray = [...populations].map(pop =>
  Number(pop.textContent.split(',').join('')));

const popTotal = popArray.reduce((pop1, pop2) => pop1 + pop2);
const popAverage = Math.round(popTotal / popArray.length);

document.querySelector('.total-population').innerText
  = popTotal.toLocaleString('en');

document.querySelector('.average-population').innerText
  = popAverage.toLocaleString('en');
