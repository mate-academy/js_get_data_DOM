'use strict';

const populationArr = [...document.querySelectorAll('span.population')];

const population = populationArr.map((p) => +p.textContent.split(',').join(''));

const count = population.length;
let averagePopulation = 0;
let totalPopulation = 0;

for (let i = 0; i < population.length; i++) {
  totalPopulation += population[i];
  averagePopulation = totalPopulation / count;
}

const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

total.textContent = totalPopulation.toLocaleString();
average.textContent = averagePopulation.toLocaleString();
