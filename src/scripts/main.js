'use strict';

const span = [...document.querySelectorAll('.population')];

const parsedNumbers = span
  .map((el) => Number(el.innerText.trim().replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const sum = parsedNumbers.reduce((acc, num) => acc + num, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = sum.toLocaleString('en-US');

const average = Math.round(sum / (parsedNumbers.length || 1));

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average.toLocaleString('en-US');
