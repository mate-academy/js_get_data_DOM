'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const eachCountryPopulation = [...population].map(item =>
  Number(item.innerHTML.split(',').join('')));
const totalAmountPopulation = eachCountryPopulation.reduce((amount, number) =>
  amount + number, 0);
const averagePopulation = totalAmountPopulation / eachCountryPopulation.length;

total.innerHTML = totalAmountPopulation.toLocaleString('en-US');

average.innerHTML = averagePopulation.toLocaleString('en-US');
