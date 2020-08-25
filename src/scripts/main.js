'use strict';

const population = document.querySelectorAll('.population');

const numbers = [...population].map(item =>
  Number(item.innerText.replace(/,/g, '')));

const total = numbers.reduce((a, b) => a + b);
const average = total / (numbers.length);

document.querySelector('.total-population').textContent = total;
document.querySelector('.average-population').textContent = average;
