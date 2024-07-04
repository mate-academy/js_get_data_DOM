'use strict';

const population = [...document.querySelectorAll('.population')].map((el) => {
  return parseInt(el.textContent.replaceAll(',', ''));
});

const totalNum = population.reduce((num, el) => num + el, 0);

const averageNum = totalNum / population.length;

document.querySelector('.total-population').textContent =
  totalNum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  averageNum.toLocaleString('en-US');

// write your code here
