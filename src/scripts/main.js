'use strict';

const nodes = document.querySelectorAll('.population');
let total = 0;
let amount = 0;

for (const node of nodes) {
  const nodeContent = node.textContent.replace(/,/g, '');
  const num = Number(nodeContent);

  if (!isNaN(num)) {
    total += num;
    amount++;
  }
}

if (amount > 0) {
  const average = Math.floor(total / amount);
  const fmt = (n) => new Intl.NumberFormat('en-US').format(Math.round(n));

  document.querySelector('.total-population').textContent = fmt(total);

  document.querySelector('.average-population').textContent = fmt(average);
}
