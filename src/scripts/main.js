'use strict';

let populationValues = document.querySelectorAll('.population');

populationValues
= [...populationValues].map(value => +value.innerText.split(',').join(''));

const totalValue = populationValues.reduce((total, currentValue) => (
  total + currentValue), 0);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = totalValue.toLocaleString();

averagePopulation.textContent
= (totalValue / populationValues.length).toLocaleString();
