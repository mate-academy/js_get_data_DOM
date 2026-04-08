'use strict';

const population = [...document.querySelectorAll('.population')];
const totalText = document.querySelector('.total-population');
const averageText = document.querySelector('.average-population');
const total = population
  .map((el) => +el.innerText.trim().replaceAll(',', ''))
  .reduce((acc, curl) => acc + curl, 0);
const average = total / population.length;

totalText.textContent = total.toLocaleString('en-US');
averageText.textContent = Math.round(average).toLocaleString('en-US');
