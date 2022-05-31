'use strict';

const countryPopulation = document.querySelectorAll('.population');
const numbers = [...countryPopulation].map(value =>
  Number(value.innerText.split(',').join('')));

const totalValue = numbers.reduce((sum, nextCountry) => sum + nextCountry, 0);
const averageValues = totalValue / numbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalValue.toLocaleString('en');
average.textContent = averageValues.toLocaleString('en');
