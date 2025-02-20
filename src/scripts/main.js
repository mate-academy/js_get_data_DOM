'use strict';

// write your code here
const elements = {
  countriesList: [...document.querySelectorAll('.population')],
  totalPopulation: document.querySelector('.total-population'),
  averagePopulation: document.querySelector('.average-population'),
};

const totalPopulation = elements.countriesList.reduce((total, country) => {
  const population = country.textContent;

  return total + parseInt(population.replace(/,/g, ''), 10);
}, 0);

const averagePopulation = totalPopulation / elements.countriesList.length;

elements.totalPopulation.textContent = totalPopulation.toLocaleString();
elements.averagePopulation.textContent = averagePopulation.toLocaleString();
