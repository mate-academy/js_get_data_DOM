'use strict';

const populations = [...document.querySelectorAll('.population')].map(
  (item) => +item.innerText.split(',').join(''));

const total = populations.reduce((a, b) => a + b);

const average = total / populations.length;

document.querySelector('.total-population').textContent
= total.toLocaleString();

document.querySelector('.average-population').textContent
= average.toLocaleString();
