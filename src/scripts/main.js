'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationContent = [];

for (const content of population) {
  const contentToNum = +content.textContent.split(',').join('');

  populationContent.push(contentToNum);
}

const total = populationContent.reduce((acc, curr) => acc + curr, 0);
const average = total / population.length;

totalPopulation.textContent = total;
averagePopulation.textContent = average;
