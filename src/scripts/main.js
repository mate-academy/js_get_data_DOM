'use strict';

const itemsOfPopulation = document.querySelectorAll('.population');
const listOfPopulation = [...itemsOfPopulation].map(part => (
  Number(part.innerText.replace(/,/g, ''))
));

const totalPopulation = listOfPopulation
  .reduce((acum, value) => acum + value, 0);
const averagePopulation = totalPopulation / listOfPopulation.length;

document.querySelector('.total-population').textContent
  = totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent
  = averagePopulation.toLocaleString();
