'use strict';

const element = document.querySelectorAll('.population');

const list = [...element].map(el => el.innerHTML);

const numversList = list.map(el => Number(el.split(',').join('')));

const total = numversList.reduce((x, y) => x + y, 0);

const average = (total / list.length);

document.querySelector('.total-population').innerHTML
  = total.toLocaleString('en-US');

document.querySelector('.average-population').innerHTML
  = average.toLocaleString('en-US');
