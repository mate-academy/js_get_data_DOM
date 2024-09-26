'use strict';

const elements = document.querySelectorAll('.population');

const array = [...elements].map((item) =>
  Number(item.innerText.split(',').join('')));

const sum = array.reduce((total, num) => total + num);
const average = sum / array.length;

document.querySelector('.total-population')
  .textContent = sum.toLocaleString('en-US');

document.querySelector('.average-population')
  .textContent = average.toLocaleString('en-US');
