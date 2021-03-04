'use strict';

const population = document.querySelectorAll('.population');

const populationNumbers = [...population].map(
  item => +item.innerText.replace(/[.,]/g, '')
);

const totalPopulation = populationNumbers.reduce(
  (acc, current) => acc + current, 0
);

const averagePopulation = totalPopulation / population.length;

const total = document.querySelector('.total-population');

total.innerText = totalPopulation.toLocaleString('en-EN');

const average = document.querySelector('.average-population');

average.innerText = averagePopulation.toLocaleString('en-EN');
