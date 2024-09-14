'use strict';

const arr = [];
const avgSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

document.querySelectorAll('.population').forEach((item) => {
  arr.push(item.textContent);
});

const population = arr.map((num) => Number(num.replaceAll(',', '')));

const totalPopulation = population.reduce((acc, num) => acc + num, 0);

const averagePopulation = Math.round(totalPopulation / population.length);

avgSpan.textContent = averagePopulation.toLocaleString('en-US');

totalSpan.textContent = totalPopulation.toLocaleString('en-US');
