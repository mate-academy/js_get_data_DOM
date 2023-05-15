'use strict';

const populationList = document.querySelectorAll('.population');
const populationArr = [...populationList].map(el =>
  +(el.innerText.split(',').join('')));
const total = populationArr.reduce((a, b) => (a + b));
const average = total / populationArr.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString();

document.querySelector('.average-population').textContent
  = average.toLocaleString();
