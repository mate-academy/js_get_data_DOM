'use strict';

const populationList = document.querySelectorAll('.population');
const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');

const convertPopulationList = [...populationList]
  .map(span => +span.textContent.replace(/,/g, ''));

const totalPopulation = convertPopulationList
  .reduce((sum, population) => sum + population, 0);

const averagePopulation = totalPopulation / convertPopulationList.length;

totalField.textContent = totalPopulation.toString();
averageField.textContent = averagePopulation.toString();
