'use strict';

const population = document.getElementsByClassName('population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const arr = [];
let total = 0;

for (let i = 0; i < population.length; i++) {
  const populationByCountry = population[i].innerHTML.replaceAll(',', '');

  arr.push(Number(populationByCountry));
}

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}

const average = (total / population.length)
  .toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,');

total = total.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1,');
totalPopulation.innerText = total;
averagePopulation.innerText = average;
