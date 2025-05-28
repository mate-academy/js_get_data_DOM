'use strict';

const populationElements = document.querySelectorAll('.population');

const valuesOfPopulation = Array.from(populationElements).map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const sum = valuesOfPopulation.reduce((acc, num) => acc + num, 0);

const average = Math.floor(sum / valuesOfPopulation.length);

document.querySelector('.total-population').textContent = `${addComas(sum)}`;

document.querySelector('.average-population').textContent =
  `${addComas(average)}`;

function addComas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// write your code here
