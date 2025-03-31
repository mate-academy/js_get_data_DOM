'use strict';

const spans = document.querySelectorAll('.population');

const nums = [];

for (const span of spans) {
  const num = +span.innerText.split(',').join('');

  nums.push(num);
}

const total = nums.reduce((acc, num) => acc + num, 0);
const average = Math.floor(total / nums.length);

document.querySelector('.total-population').innerText =
  total.toLocaleString('en-US');

document.querySelector('.average-population').innerText =
  average.toLocaleString('en-US');
