'use strict';

const populations = document.querySelectorAll('span.population');
const htmlTotal = document.querySelector('span.total-population');
const htmlAverage = document.querySelector('span.average-population');

const numericPopulations = [...populations].map(population => {
  return +population.textContent.split(',').join('');
});

const total = numericPopulations.reduce((acc, item) => acc + item);
const average = total / numericPopulations.length;

htmlTotal.textContent = total.toLocaleString();
htmlAverage.textContent = average.toLocaleString();
