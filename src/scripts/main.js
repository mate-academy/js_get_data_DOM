'use strict';

const populationCollection = document.querySelectorAll('.population');
const populationList = [...populationCollection].map(part => (
  Number(part.innerText.replace(/[,]/g, ''))
));

const totalPopulation = populationList.reduce((sum, part) => sum + part, 0);
const averagePopulation = totalPopulation / populationList.length;

document.querySelector('.total-population').textContent
= totalPopulation.toLocaleString();

document.querySelector('.average-population').textContent
= averagePopulation.toLocaleString();
