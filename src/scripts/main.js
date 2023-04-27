'use strict';

const populationElements = document.querySelectorAll('.population');
const populationElementsArray = [...populationElements]
  .map(element => Number(element.innerText.replaceAll(',', '')));
const totalPopulation = populationElementsArray.reduce(
  (sum, current) => sum + current, 0
);
const averagePopulation = totalPopulation / populationElementsArray.length;
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = `${totalPopulation.toLocaleString('en-US')}`;
average.textContent = `${averagePopulation.toLocaleString('en-US')}`;
