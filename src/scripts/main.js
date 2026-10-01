'use strict';

const population = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const populationNums = population.map((country) => country.textContent);

let populationTtl = 0;
const countriesCount = population.length;

for (const country of populationNums) {
  populationTtl += Number(country.split(',').join(''));
}

const populationAvg = Math.round(populationTtl / countriesCount);

total.textContent = populationTtl.toLocaleString('en-US');
average.textContent = populationAvg.toLocaleString('en-US');
