'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let populationSum = 0;

for (const country of countriesPopulation) {
  const population = parseInt(country.innerText.replace(/,/g, ''), 10);

  if (!isNaN(population)) {
    populationSum += population;
  }
}

totalPopulation.innerText = populationSum.toLocaleString('en-US');

averagePopulation.innerText
= (populationSum / countriesPopulation.length).toLocaleString('en-US');
