'use strict';

const inside = document.querySelector('.container');
const t = inside.querySelector('.list');
const list = t.querySelectorAll('li span');
const p = Array.from(list);

const totalSum = p.reduce((acc, curr) => {
  const value = Number(curr.textContent);

  return acc + value;
}, 0);

const average = totalSum / list.length;

const l = inside.querySelector('.total');
const u = inside.querySelector('.average');

l.textContent = totalSum;
u.textContent = average;
