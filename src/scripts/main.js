'use strict';

const populations = [...document.querySelectorAll('.population')].map(
  (e) => +e.textContent.split(',').join(''),
);
const total = populations.reduce((sum, el) => sum + el, 0);
const avarage = total / populations.length;
const totalSpan = document.querySelector('.total-population');
const avarageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString('en-US');
avarageSpan.textContent = avarage.toLocaleString('en-US');
