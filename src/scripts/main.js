'use strict';

const populations = document.querySelectorAll('.population');

const list = [...populations].map((item) => item.innerHTML.split(',').join(''));
let total = 0;

for (const item of list) {
  total += +item;
}

const average = total / list.length;
const totalFormat = total.toLocaleString('en-US');
const averageFormat = average.toLocaleString('en-US');
const totalPopulation = document.querySelector('.total-population');

totalPopulation.textContent = totalFormat;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.textContent = averageFormat;
