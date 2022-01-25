'use strict';

const population = document.querySelectorAll('.population');

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

const numbers = [...population].map(amount =>
  amount.innerHTML).map(x => +x.replace(/,/g, ''));

const totalAmount = numbers.reduce((sum, x) => sum + x, 0);

total.textContent = totalAmount.toLocaleString('en-US');

average.textContent = (totalAmount / numbers.length).toLocaleString('en-US');
