'use strict';

const population = [...document.getElementsByClassName('population')];
const total = population
  .map(item => parseFloat(item.innerHTML.replaceAll(',', '')))
  .reduce((a, b) => a + b);
const average = total / population.length;
const totalPopulation = document.getElementsByClassName('total-population')
  .innerHTML;
const averagePopulation = document.getElementsByClassName('average-population')
  .innerHTML;

totalPopulation[0] = total.toLocaleString('en-US');
averagePopulation[0] = average.toLocaleString('en-US');
