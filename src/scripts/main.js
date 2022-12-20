'use strict';

// write your code here

const element = document.querySelectorAll('.population');

let total = 0;
let count = 0;

for (let el of element) {
  el = +el.textContent.split(',').join('');

  total += el;

  count++;
}

const full = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

full.textContent = total.toLocaleString();
average.textContent = (total / count).toLocaleString();
