'use strict';

const populationList = document.querySelectorAll('.population');

const total = [...populationList]
  .map(element => Number(element.textContent.split(',').join('')))
  .reduce((sum, current) => sum + current);

const average = total / populationList.length;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en');
