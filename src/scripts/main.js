'use strict';

const list = document.querySelectorAll('.population');
let total = 0;
let count = 0;

for (let i = 0; i < list.length; i++) {
  total += +list[i].textContent.split(',').join('');
  count++;
}

const average = total / count;

document.querySelector('.average-population').textContent
  = average
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

document.querySelector('.total-population').textContent
  = total
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
