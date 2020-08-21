'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationsSize = [...population].map(countryPopulation => {
  return +countryPopulation.textContent.replace(/,/g, '');
});

const total = populationsSize.reduce((sum, value) => sum + value);
const average = total / populationsSize.length;

totalPopulation.innerHTML = total.toLocaleString('en-US');
averagePopulation.innerHTML = average.toLocaleString('en-US');
