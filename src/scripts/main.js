'use strict';

// write your code here
const populationOfElements = document.querySelectorAll('.population');
let finalPopulation = 0;

populationOfElements.forEach((element) => {
  finalPopulation += parseInt(element.textContent.replace(/,/g, ''));
});

const averagePopulation = finalPopulation / populationOfElements.length;

document.querySelector('.total-population').textContent =
  finalPopulation.toLocaleString();

document.querySelector('.average-population').textContent =
  averagePopulation.toLocaleString();
