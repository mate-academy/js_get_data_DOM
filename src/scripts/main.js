'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total');
const average = document.querySelector('.average');

const sum = [...population].map(el => parseInt(el.innerText.split(',')
  .join(''))).reduce((acc, el) => acc + el, 0);

total.innerText = sum.toLocaleString('en');
average.innerText = (sum / population.length).toLocaleString('en');
