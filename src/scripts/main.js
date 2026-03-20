'use strict';

const list = document.querySelectorAll(
  '.container .list .list__item .population',
);
const p = Array.from(list);

let totalSum = p.reduce((acc, curr) => {
  const value = Number(curr.textContent.split(',').join(''));

  return acc + value;
}, 0);

let average = totalSum / list.length;

totalSum = totalSum.toLocaleString('en-US');
average = average.toLocaleString('en-US');

const t = document.querySelector('.container .total-population');
const k = document.querySelector('.container .average-population');

t.textContent = totalSum;
k.textContent = average;
