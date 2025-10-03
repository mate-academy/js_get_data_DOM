'use strict';

const span = [...document.querySelectorAll('.population')];

const sum = span
  .map((el) => Number(el.innerText.trim().replace(/,/g, '')))
  .filter((num) => !isNaN(num))
  .reduce((acc, num) => acc + num, 0);

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = sum.toLocaleString('en-US');

const average = Math.round(sum / span.length);

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average.toLocaleString('en-US');
