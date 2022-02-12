'use strict';

const population = document.querySelectorAll('.population');

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');
const numbers = [...population].map(
  text => +text.innerText.split(',').join(''));

const totalNumber = numbers.reduce((prev, x) => prev + x, 0);

total.innerText = totalNumber.toLocaleString('en-US');

average.innerText = (totalNumber / numbers.length).toLocaleString('en-US');
