'use strict';

const population = [...document.querySelectorAll('.population')].map((x) => {
  let num = x.textContent;

  num = num.replace(/,/g, '');

  return +num;
});

const sum = population.reduce((sumAll, num) => sumAll + num, 0);
const average = sum / population.length;

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');
