'use strict';

// write your code here
const numbers = [...document.querySelectorAll('.population')];
const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');
const propArr = [];

for (const i of numbers) {
  const a = Number(i.innerHTML.split(',').join(''));

  if (a) {
    propArr.push(a);
  }
}

const avgN =
  Math.round(propArr.reduce((sum, curr) => sum + curr, 0) / propArr.length) ||
  0;
const totalN = propArr.reduce((sum, curr) => sum + curr, 0);

function format(a) {
  const text = a.toString().split('');

  for (let i = text.length - 3; i > 0; i -= 3) {
    text.splice(i, 0, ',');
  }

  return text.join('');
}

average.innerHTML = format(avgN) === Infinity || isNaN(avgN) ? 0 : format(avgN);
total.innerHTML = format(totalN);
