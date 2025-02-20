'use strict';

const population = document.querySelectorAll('.population');
const averPopulation = document.querySelectorAll('span.average-population');
const totalPopulation = document.querySelectorAll('span.total-population');

let total = 0;

population.forEach(part => {
  total += +(part.textContent.split(',').join(''));
});

const average = total / population.length;

totalPopulation[0].textContent = total.toLocaleString('en-US');
averPopulation[0].textContent = average.toLocaleString('en-US');
