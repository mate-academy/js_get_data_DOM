'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let totalPopulation = 0;

[...population].map(countryPopulation => {
  totalPopulation += +(countryPopulation.innerText.replaceAll(',', ''));
});

const averagePopulation = totalPopulation / population.length;

total.innerHTML = totalPopulation.toLocaleString('en-US');
average.innerHTML = averagePopulation.toLocaleString('en-US');
