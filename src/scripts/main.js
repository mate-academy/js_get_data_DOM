'use strict';

const populationElements = document.querySelectorAll('.population');
const populationValues = [...populationElements].map((item) => {
  return +item.textContent.split(',').join('');
});
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

let average =
  populationValues.reduce((container, item) => container + item, 0) /
  populationValues.length;

let total = average * populationValues.length;

average = average.toLocaleString('en-US');
total = total.toLocaleString('en-US');

averagePopulation.textContent = average;
totalPopulation.textContent = total;
