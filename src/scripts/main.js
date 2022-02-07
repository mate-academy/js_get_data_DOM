'use strict';

const population = document.getElementsByClassName('population');

let total = 0;

for (let i = 0; i < population.length; ++i) {
  total += +(population[i].innerHTML.split(',').join(''));
}

const average = total / population.length;

const totalPopulation = document.getElementsByClassName('total-population');

totalPopulation[0].textContent = total.toLocaleString('en-US',
  { maximumFractionDigits: 2 });

const averagePopulation = document.getElementsByClassName('average-population');

averagePopulation[0].textContent = average.toLocaleString('en-US',
  { maximumFractionDigits: 2 });
