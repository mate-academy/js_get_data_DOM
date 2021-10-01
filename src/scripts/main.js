'use strict';

let sum = 0;
let average = 0;

const listPopulation = document.querySelectorAll('.population');
const calcSum = document.querySelector('.total-population');
const calcAverege = document.querySelector('.average-population');

[...listPopulation].forEach(el => {
  sum += +el.textContent.replace(/,/g, '');

  return sum;
});

average = sum / listPopulation.length;

calcSum.textContent = sum.toLocaleString();
calcAverege.textContent = average.toLocaleString();
