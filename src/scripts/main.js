'use strict';

const populations = document.getElementsByClassName('population');

const populationValues = Array.from(populations).map((span) => {
  return parseFloat(span.textContent.replace(',', ''));
});

function getFullPopulation(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return sum.toLocaleString('en-US');
}

function getAvaragePopulation(values) {
  let sum = 0;

  for (let i = 0; i < values.length; i++) {
    sum += values[i];
  }

  return (sum / values.length).toLocaleString('en-US').replace(/\./g, ',');
}

const totalPopulation = getFullPopulation(populationValues);
const averagePopulation = getAvaragePopulation(populationValues);

const totalPopulationElement = document.querySelector('.total-population');
const avaragePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent = totalPopulation;
avaragePopulationElement.textContent = averagePopulation;
