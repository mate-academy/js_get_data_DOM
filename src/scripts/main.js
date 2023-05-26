'use strict';

const populationList = document.querySelectorAll('.population');
const populationArr = [...populationList].map(el =>
  +(el.innerText.split(',').join('')));
const total = populationArr.reduce((acc, number) => (acc + number));
const average = total / populationArr.length;

document.querySelector('.total-population').textContent
  = total.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = average.toLocaleString('en-US');
