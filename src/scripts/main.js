'use strict';

const population = document.querySelectorAll('.population');

const populationArray = [...population].map(element =>
  +(element.innerText.split(',').join('')));

const sumOfPopulation = populationArray.reduce((sum, element) =>
  (sum + element), 0);

const averagePopulation = sumOfPopulation / populationArray.length;

const totalElement = document.querySelector('.total-population');
const averageElenemt = document.querySelector('.average-population');

totalElement.innerText = sumOfPopulation.toLocaleString();

averageElenemt.innerHTML = averagePopulation.toLocaleString();
