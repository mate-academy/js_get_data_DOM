'use strict';

const populationElement = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populationMapped = [...populationElement].map(element =>
  +(element.innerText.split(',').join('')));

const totalPopulation = populationMapped.reduce((accumulator, element) =>
  (accumulator + element), 0);
const averagePopulation = totalPopulation / populationMapped.length;

totalElement.innerText = totalPopulation.toLocaleString();
averageElement.innerText = averagePopulation.toLocaleString();
