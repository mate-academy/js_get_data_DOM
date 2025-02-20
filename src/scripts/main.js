'use strict';

const populationArray = document.getElementsByClassName('population');
let totalPopulation = 0;

const numOfCountries = [...populationArray].reduce(
  (accumulator, currentValue) => accumulator + 1,
  0,
);

for (const countryPopulation of populationArray) {
  totalPopulation += Number(countryPopulation.innerText.split(',').join(''));
}

document.getElementsByClassName('total-population')[0].innerText =
  totalPopulation.toLocaleString('En-US');

document.getElementsByClassName('average-population')[0].innerText = (
  totalPopulation / numOfCountries
).toLocaleString('En-US');
