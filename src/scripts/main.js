'use strict';

const countries = document.querySelectorAll('.population');

const countryPopulation = [...countries].map(item =>
  parseInt(item.innerHTML.split(',').join('')));

const totalValue = countryPopulation.reduce((sum, population) =>
  sum + population, 0);
const total = document.querySelector('.total-population');

total.innerHTML = totalValue.toLocaleString('en-US');

const averageValue = totalValue / countryPopulation.length;
const average = document.querySelector('.average-population');

average.innerHTML = averageValue.toLocaleString('en-US');
