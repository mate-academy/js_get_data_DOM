'use strict';

const population = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const numbers = [];

for (let i = 0; i < population.length; i++) {
  const text = population[i].textContent;

  const convertToNumber = Number(text.replace(/,/g, ''));

  numbers.push(convertToNumber);
}

const totalSum = numbers.reduce((sum, current) => sum + current, 0);
const average = totalSum / numbers.length;
const formatNumber = (num) => num.toLocaleString('en-US');

totalPopulation.innerHTML = formatNumber(totalSum);
averagePopulation.innerHTML = formatNumber(Math.round(average));
