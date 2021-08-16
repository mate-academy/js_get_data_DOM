'use strict';

const populationList = document.querySelectorAll('.population');
const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');

const populationValues = [...populationList].map(item => {
  return item.innerHTML.split(',').join('');
});

const totalPopulation = populationValues.reduce((sum, current) => {
  return sum + parseInt(current);
}, 0);

const averagePopulation = totalPopulation / populationValues.length;

const totalPopulationText = totalPopulation.toLocaleString('en-US');

const averagePopulationText = averagePopulation.toLocaleString('en-US');

totalField.textContent = totalPopulationText;
averageField.textContent = averagePopulationText;
