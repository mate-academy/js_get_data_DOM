'use strict';

const countriesPopulation = document.querySelectorAll('.population');
const totalElem = document.querySelector('.total-population');
const avgElem = document.querySelector('.average-population');
const total = [...countriesPopulation].reduce((a, b) => (
  a + +b.textContent.split(',').join('')
), 0);

const avg = Math.floor(total / countriesPopulation.length);

totalElem.textContent = total.toLocaleString('en-US');
avgElem.textContent = avg.toLocaleString('en-US');
