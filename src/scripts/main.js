'use strict';

const population = document.querySelectorAll('span.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const countriesPopulation = [...population].map((country) =>
  country.innerHTML.split(',').join('')
);

const total = countriesPopulation.reduce((acc, curr) => {
  return acc + Number(curr);
}, 0);

totalPopulation.innerHTML = total.toLocaleString('en-US', {
  maximumFractionDigits: 2,
});

averagePopulation.innerHTML = (total / countriesPopulation.length)
  .toLocaleString('en-US', { maximumFractionDigits: 2 });
