'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationList = [];

for (const population of populations) {
  populationList.push(+(population.innerText).split(',').join(''));
}

const totalNumb = populationList.reduce((a, b) => a + b);
const averageNumb = totalNumb / populationList.length;

totalPopulation.textContent = totalNumb.toLocaleString();
averagePopulation.textContent = averageNumb.toLocaleString();
