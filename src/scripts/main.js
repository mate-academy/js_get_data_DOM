'use strict';

const spanElements = document.querySelectorAll('.population');

const populationOfCountries = [];

for (const population of spanElements) {
  populationOfCountries.push(population.innerHTML);
}

const populationNumbers = populationOfCountries.map(
  stringNumber => +stringNumber.split(',').join(''));

let totalValue = 0;

for (const value of populationNumbers) {
  totalValue += value;
}

const averageValue = totalValue / populationNumbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

function numberWithComa(arg) {
  return arg.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

totalPopulation.innerHTML = numberWithComa(totalValue);
averagePopulation.innerHTML = numberWithComa(averageValue);
