'use strict';

const population = [...document.getElementsByClassName('population')];
const total = population
  .map(item => parseFloat(item.innerHTML.replaceAll(',', '')))
  .reduce((a, b) => a + b);
const average = total / population.length;
const totalPopulation = document.getElementsByClassName('total-population');
const averagePopulation = document.getElementsByClassName('average-population');

totalPopulation[0].innerHTML = total.toLocaleString('en-US');
averagePopulation[0].innerHTML = average.toLocaleString('en-US');
