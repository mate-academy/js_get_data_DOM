'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let populationSum = 0;

for (const country of countriesPopulation) {
  if (!isNaN(parseInt(country.innerText, 10))) {
    populationSum += parseInt(country.innerText.replace(/,/g, ''), 10);
  }
}

totalPopulation.innerText = populationSum.toLocaleString('En-Us');
averagePopulation.innerText = (populationSum / countriesPopulation.length).toLocaleString('En-Us');
