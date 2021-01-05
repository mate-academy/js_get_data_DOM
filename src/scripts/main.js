'use strict';

const totalPopulation = document.querySelector('.total-population');
const population = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');

const total = [...population].reduce((sum, item) =>
  sum + Number(item.innerText.split(',')
    .join('')), 0);

const average = total / population.length;

totalPopulation.innerText = total.toLocaleString('en-US');

averagePopulation.innerText = average.toLocaleString('en-US');
