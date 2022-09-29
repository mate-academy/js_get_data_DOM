'use strict';

const populations = [...document.querySelectorAll('.population')];

const summ = populations.reduce((sum, item) => sum
  + Number(item.textContent.split(',').join('')), 0);

document.querySelector('.total-population').textContent
  = summ.toLocaleString('en-US');

document.querySelector('.average-population').textContent
  = (summ / populations.length).toLocaleString('en-US');
