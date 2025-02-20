'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements].map(
  (element) => element.textContent,
);

populations.forEach(function (element, index, array) {
  array[index] = parseInt(element.replace(/,/g, ''), 10);
});

const length = populations.length;

let totalPopulation = 0;

populations.forEach((element) => {
  totalPopulation += element;
});

let averagePopulation = totalPopulation / length;

totalPopulation = totalPopulation.toLocaleString('en-US');
averagePopulation = averagePopulation.toLocaleString('en-US');

const totalPopulationElem = document.querySelector('.total-population');

totalPopulationElem.textContent = totalPopulation;

const averagePopulationElem = document.querySelector('.average-population');

averagePopulationElem.textContent = averagePopulation;
