'use strict';

const populationItems = document.querySelectorAll('.population');

const totalPopulation = [...populationItems]
  .reduce((amount, item) => (
    amount + Number((item.innerText).split(',').join(''))
  ), 0);

const averagePopulation = totalPopulation / populationItems.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerText = totalPopulation.toLocaleString('en');
average.innerText = averagePopulation.toLocaleString('en');
