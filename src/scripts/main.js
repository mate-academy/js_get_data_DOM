'use strict';

const allPopulations = [...document.querySelectorAll('.population')]
  .map(el => +(el.textContent.split(',').join('')));

const sum = allPopulations.reduce((acc, el) => acc + el);
const aver = sum / allPopulations.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = `${sum.toLocaleString('en-US')}`;
average.textContent = `${aver.toLocaleString('en-US')}`;
