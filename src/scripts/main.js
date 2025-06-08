'use strict';

const population = document.querySelectorAll('.population');

const sum = Array.from(population).reduce((acc, el) => {
  return acc + Number(el.textContent.replace(/,/g, ''));
}, 0);

const average = Math.round(sum / population.length);

const total = document.querySelector('.total-population');
const aver = document.querySelector('.average-population');

total.textContent = `${sum.toLocaleString('en-US')}`;
aver.textContent = `${average.toLocaleString('en-US')}`;
