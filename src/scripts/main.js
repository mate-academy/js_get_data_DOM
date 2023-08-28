'use strict';

// write your code here

const populations = document.querySelectorAll('.population');
const summ = [...populations]
  .map(el => el.innerHTML)
  .map(el => +el.replaceAll(',', ''))
  .reduce((x, sum) => x + sum, 0);

document.querySelector('.total-population').textContent
  = summ.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = (summ / 10).toLocaleString('en-US');
