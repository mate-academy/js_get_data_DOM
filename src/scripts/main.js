'use strict';

const populationList = document.querySelectorAll('.population');
const totaPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationWithOutSeparator
= [...populationList]
  .map(item => item.textContent.split(',').join(''));

const population = populationWithOutSeparator.map(Number);

const total = population.reduce((acc, el) => acc + el);
const avarage = total / population.length;

totaPopulation.textContent = total.toLocaleString().replace(/\s/g, ',');
averagePopulation.textContent = avarage.toLocaleString().replace(/\s/g, ',');
