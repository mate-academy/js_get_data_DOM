'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const countries = document.querySelectorAll('.population');

const population = [...countries].reduce((count, el) => {
  return count + +el.textContent.split(',').join('');
}, 0);

totalPopulation.innerHTML = population.toLocaleString();
averagePopulation.innerHTML = (population / countries.length).toLocaleString();
