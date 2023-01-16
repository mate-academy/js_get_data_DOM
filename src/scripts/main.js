'use strict';

const populationText = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const textArray = [...populationText].map(country =>
  Number(country.innerText.split(',').join(''))
);
const totalPopulation = textArray.reduce((x, y) => x + y, 0);
const averagePopulation = totalPopulation / textArray.length;

total.innerText = totalPopulation.toLocaleString('en-US');
average.innerText = averagePopulation.toLocaleString('en-US');
