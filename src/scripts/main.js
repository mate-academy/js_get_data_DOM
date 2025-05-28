'use strict';

const populationElements = document.getElementsByClassName('population');

const valuesOfPopulation = Array.from(populationElements).map((el) => {
  Number(el.textContent.replaceAll(',', ''));
});

const sumOfValues = valuesOfPopulation.reduce((sum, num) => sum + num, 0);

const average = Math.floor(sumOfValues / valuesOfPopulation.length);

document.querySelector('.total-population').textContent =
  `${addComas(sumOfValues)}`;

document.querySelector('.average-population').textContent =
  `${addComas(average)}`;

function addComas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// write your code here
