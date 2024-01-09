'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const listLength = document.querySelector('.list').children.length;

const population = [...document.querySelectorAll('.population')];
const populationTotal = population.reduce((acc, curr) => acc
  + (+curr.innerText.replaceAll(',', '')), 0
);

totalPopulation.innerText = populationTotal.toLocaleString('en-US');

averagePopulation.innerText = (populationTotal / listLength)
  .toLocaleString('en-US');
