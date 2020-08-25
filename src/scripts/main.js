'use strict';

let elements = document.querySelectorAll('.population');
const total = document.querySelectorAll('.total-population');
const average = document.querySelectorAll('.average-population');

elements = [...elements].map(el => +el.textContent.split(',').join(''));

total[0].textContent = elements
  .reduce((accum, curr) => accum + curr).toLocaleString('en-US');

average[0]
  .textContent = (+total[0].textContent.split(',').join(('')) / elements.length)
    .toLocaleString('en-US');
