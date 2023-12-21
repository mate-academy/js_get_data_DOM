'use strict';

const allPopulations = [...document.querySelectorAll('.population')];

const converted = allPopulations.map(population => {
  return +population.textContent.replaceAll(',', '');
});

const total = converted.reduce((a, b) => a + b, 0);
const average = total / converted.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
