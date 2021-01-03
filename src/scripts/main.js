'use strict';

const allPopulation = document.querySelectorAll('.population');

const allPopulationArray = [...allPopulation].map(element =>
  +(element.innerText.split(',').join('')));

const totalPopulation = allPopulationArray.reduce((sum, element) =>
  (sum + element), 0);

const averagePopulation = totalPopulation / allPopulationArray.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.innerText = totalPopulation.toLocaleString();

averageElement.innerHTML = averagePopulation.toLocaleString();
