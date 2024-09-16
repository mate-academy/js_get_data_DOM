'use strict';

const list = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const formatter = new Intl.NumberFormat('en-US');
let total = 0;

total = [...list]
  .map(num => Number(num.innerHTML.split(',').join('')))
  .reduce((sum, num) => sum + num);

totalPopulation.innerHTML = String(formatter.format(total));
averagePopulation.innerHTML = String(formatter.format(total / list.length));
