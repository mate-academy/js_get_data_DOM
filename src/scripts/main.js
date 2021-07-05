'use strict';

const populationList = document.querySelectorAll('.population');
const totaPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationWithOutSeparator
= [...populationList]
  .map(item => item.textContent.split(',').join(''));

const population = populationWithOutSeparator.map(Number);

const total = population.reduce((accamulat, element) => accamulat + element);
const avarage = total / population.length;

const result = (text) => text.toLocaleString().replace(/\s/g, ',');

totaPopulation.textContent = result(total);
averagePopulation.textContent = result(avarage);
