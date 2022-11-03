'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const sum = [...population].reduce((acc, el) => {
  return acc + Number(el.textContent.split(',').join(''));
}, 0);

total.textContent = sum.toLocaleString('en-US');
average.textContent = (sum / population.length).toLocaleString('en-US');
