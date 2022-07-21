'use strict';

const population = document.getElementsByClassName('population');

const totalPopulationElement = document
  .getElementsByClassName('total-population')[0];
const averagePopulationElement = document
  .getElementsByClassName('average-population')[0];

const totalPopulation = [...population].reduce((acc, country) => {
  return acc + Number(country.innerText.split(',').join(''));
}, 0);

totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en');

averagePopulationElement.innerHTML = (totalPopulation / population.length)
  .toLocaleString('en');
