'use strict';

const populationArray = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const countriesCount = populationArray.length;
let total = 0;

populationArray.forEach((stringPopulation) => {
  total += parseInt(stringPopulation.textContent.replace(/,/g, ''), 10);
});

const average = Math.round(total / countriesCount);

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
