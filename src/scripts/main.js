'use strict';

const elements = document.getElementsByTagName('span');
const countriesPopulation = [];

for (const element of elements) {
  if (element.classList.contains('population')
  && typeof +element.innerText === 'number') {
    countriesPopulation.push(+element.innerText.split(',').join(''));
  }
}

const total = countriesPopulation.reduce((a, b) => a + b, 0);
const avg = total / countriesPopulation.length;

const totalPopulationElement = document.querySelector('.total-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = total.toLocaleString('en');
}

const avgPopulationElement = document.querySelector('.average-population');

if (avgPopulationElement) {
  avgPopulationElement.textContent = avg.toLocaleString('en');
}
