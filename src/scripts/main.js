'use strict';

const dataCollection = document.querySelectorAll('.population');

const PopulationCollection = [...dataCollection].map(
  people => +people.textContent.split(',').join('')
);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const total = PopulationCollection.reduce((a, b) => a + b);
const average = total / dataCollection.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
