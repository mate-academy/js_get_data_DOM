'use strict';

const nodes = document.querySelectorAll('.population');
const numbers = [];
let total = 0;
let average = 0;

for (const node of nodes) {
  const num = Number(node.textContent.replaceAll(',', ''));

  if (!Number.isNaN(num)) {
    numbers.push(num);
  }
}

total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);

average = total / numbers.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
