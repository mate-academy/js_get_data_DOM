'use strict';

const populationsOfCountries = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let sum = 0;

populationsOfCountries.forEach(item => {
  sum += Number(item.textContent.split(',').join(''));
});

const average = sum / populationsOfCountries.length;

const nf = new Intl.NumberFormat('en-US');

totalPopulation.textContent = nf.format(sum);
averagePopulation.textContent = nf.format(average);
