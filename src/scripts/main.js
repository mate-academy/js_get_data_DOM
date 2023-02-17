'use strict';

let populationNums = [...document.querySelectorAll('.population')];

populationNums = populationNums.map(el => +el.textContent.replace(/\D/g, ''));

const total = populationNums.reduce((acc, curnt) => acc + curnt);
const average = total / populationNums.length;

document.querySelector('.total-population').innerHTML
  = total.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
  = average.toLocaleString('en-US');
