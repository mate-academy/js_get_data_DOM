'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const countries = [...document.querySelectorAll('.population')];
const population = countries.map(el => {
  return +el.innerText.split(',').join('');
});

const populationSumm = population.reduce((sum, el) => {
  return sum + el;
}, 0);

const average = populationSumm / population.length;

totalPopulation.outerHTML = populationSumm.toLocaleString();
averagePopulation.outerHTML = average.toLocaleString();
