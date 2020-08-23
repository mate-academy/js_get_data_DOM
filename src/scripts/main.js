'use strict';

const population = [...document.querySelectorAll('.population')];
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const sum = population
  .map(country => {
    return Number(country.innerText.replace(/,/g, ''));
  })
  .reduce((a, b) => a + b);

totalPopulation.innerText = sum.toLocaleString('en-US');
averagePopulation.innerText = (sum / population.length).toLocaleString('en-US');
