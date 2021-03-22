'use strict';

const population = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalAll = population.map(el => +el.innerText.replace(/,/g, ''))
  .reduce((prev, el) => prev + el);

const averageAll = totalAll / population.length;

total.innerText = totalAll.toLocaleString('en-US');
average.innerText = averageAll.toLocaleString('en-US');
