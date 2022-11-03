'use strict';

// write your code here
/* const list = document.querySelector('.list'); */
const population = [...document.querySelectorAll('span.population')];
const populationValue = population.map(item =>
  Number(item.innerText.split(',').join('')));

const totalValue = populationValue.reduce(
  (sum, num) => sum + num, 0);

const average = (totalValue / population.length);

document.querySelector('.total-population').innerText
  = new Intl.NumberFormat('en-GB').format(totalValue);

document.querySelector('.average-population').innerText
    = new Intl.NumberFormat('en-GB').format(average);
