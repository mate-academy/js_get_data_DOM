'use strict';

const selectors = [...document.querySelectorAll('.population')];
const total = selectors
  .map(item => +item.textContent.split(',').join(''))
  .reduce((sum, item) => sum + item, 0);
const average = total / selectors.length;

document.querySelector('.total-population')
  .textContent = total.toLocaleString('en');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en');
