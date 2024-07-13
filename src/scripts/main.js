'use strict';
const numbers = document.querySelectorAll('.population');
const list = [];
numbers.forEach((item) => list.push(item.textContent));
const total = list.reduce((acc, val) => acc + +val.replaceAll(',', ''), 0);
const average = total / numbers.length;

document.querySelector('.total-population').textContent = total
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
document.querySelector('.average-population').textContent = average
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
