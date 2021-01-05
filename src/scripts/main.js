'use strict';

const population = document.querySelectorAll('.population');

const populationArray = [...population].map(element =>
  +(element.innerText.split(',').join('')));

const allPopulation = populationArray.reduce((sum, element) =>
  (sum + element), 0);

const averagePopulation = allPopulation / populationArray.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = allPopulation.toLocaleString('en-US');
averageElement.innerText = averagePopulation.toLocaleString('en-US');
