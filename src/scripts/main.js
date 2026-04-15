'use strict';

// write your code here
const data = [...document.querySelectorAll('.population')];
const values = data
  .map((item) => item.textContent.trim())
  .map((item) => Number(item.replaceAll(',', '')));
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const total = values.reduce((sum, item) => sum + +item, 0);
const average = total / values.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
