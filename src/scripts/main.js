'use strict';

const populationElements = document.querySelectorAll('.population');

let populations = [...populationElements].map((element) => element.textContent);

populations = populations.map((element) =>
  parseInt(element.replace(/,/g, ''), 10),
);

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
