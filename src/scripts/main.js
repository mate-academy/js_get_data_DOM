'use strict';

// write your code here

let populations = document.querySelectorAll('span.population');

populations
  = [...populations].map(
    population => +population.innerText.split(',')
      .join(''));

const total = populations.reduce((sum, n) => sum + n, 0);

const average = total / populations.length;

const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
