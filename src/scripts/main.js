'use strict';

const numbers = [...document.querySelectorAll('.population')].map((item) => {
  return Number(item.textContent.replace(/,/g, ''));
});

const sum = numbers.reduce((acc, i) => acc + i, 0);

const avr = sum / numbers.length;

document.querySelectorAll('.total-population')[0].textContent =
  sum.toLocaleString();

document.querySelectorAll('.average-population')[0].textContent =
  avr.toLocaleString();
