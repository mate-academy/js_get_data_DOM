'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')];

const newPopul = populations.map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''), 10);
});

const totalCount = newPopul.reduce((el, count) => count + el, 0);
const average = totalCount / newPopul.length;

document.querySelector('.total-population').textContent =
  totalCount.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
