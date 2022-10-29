'use strict';

const populationList = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const normalizePopulation = [...populationList].map(country =>
  parseInt(country.innerText.split(',').join(''))
);

const total = normalizePopulation.reduce((initial, next) => initial + next, 0);
const average = total / normalizePopulation.length;

totalPopulation.innerText = total.toLocaleString('en-US');
averagePopulation.innerText = average.toLocaleString('en-US');
