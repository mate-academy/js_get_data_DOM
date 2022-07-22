'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;
const arr = [];

population.forEach(element => (arr.push(element.innerHTML
  .replace(/,/g, ''))));

sum = arr.reduce((x, y) => x + +y, 0);

total.innerText = new Intl.NumberFormat('en-US').format(sum);
average.innerText = new Intl.NumberFormat('en-US').format(sum / arr.length);
