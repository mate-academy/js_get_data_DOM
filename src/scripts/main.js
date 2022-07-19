'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const totalElem = document.querySelector('.total-population');
const avgElem = document.querySelector('.average-population');
let total = 0;

countriesPopulation.forEach(x => {
  total += +x.textContent.split(',').join('');
});

const avg = Math.floor(total / countriesPopulation.length);

totalElem.textContent = total.toLocaleString('en-US');
avgElem.textContent = avg.toLocaleString('en-US');
