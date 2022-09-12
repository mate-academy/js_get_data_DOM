'use strict';

const selector = [...document.querySelectorAll('.population')];

const sum = selector
  .map(item => +item.textContent.split(',').join(''))
  .reduce((sm, item) => sm + item, 0);

const total = sum / selector.length;

document.querySelector('.total-population')
  .textContent = sum.toLocaleString('en');

document.querySelector('.average-population')
  .textContent = total.toLocaleString('en');
