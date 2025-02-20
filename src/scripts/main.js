'use strict';

const populations = document.querySelectorAll('span.population');
const averagePopulation = document.querySelector('span.average-population');
const totalPopulation = document.querySelector('span.total-population');
const numbers = Array.from(populations).map((span) => {
  const row = span.textContent;

  return +row.split(',').join('');
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

totalPopulation.textContent = `${total.toLocaleString('en-US')}`;
averagePopulation.textContent = `${Math.round(average).toLocaleString('en-US')}`;
