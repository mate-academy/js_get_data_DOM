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

totalPopulation.outerHTML = populationSumm;
averagePopulation.outerHTML = populationSumm / population.length;
