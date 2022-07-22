'use strict';

const population = document.getElementsByClassName('population');

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalPopulation = [...population].reduce((acc, country) => {
  return acc + Number(country.innerText.split(',').join(''));
}, 0);

totalPopulationElement.innerHTML = totalPopulation.toLocaleString('en');

averagePopulationElement.innerHTML = (totalPopulation / population.length)
  .toLocaleString('en');
