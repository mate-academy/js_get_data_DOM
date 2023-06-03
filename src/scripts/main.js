'use strict';

const findClassPopulation = document.querySelectorAll('.population');

let count = 0;

for (const char of findClassPopulation) {
  count += +char.textContent.split(',').join('');
}

const totalCount = count;

const averageCount = count / findClassPopulation.length;

const averagePopulation = document.querySelector('.average-population');

const totalPopulation = document.querySelector('.total-population');

averagePopulation.textContent = averageCount.toLocaleString('en-US');

totalPopulation.textContent = totalCount.toLocaleString('en-US');
