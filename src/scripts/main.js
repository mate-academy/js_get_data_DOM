'use strict';

// write your code here
let total = 0;

document.querySelectorAll('.population').forEach((el) => {
  total += Number(el.textContent.replaceAll(',', ''));
});

const average = Math.round(
  total / document.querySelectorAll('.population').length,
).toLocaleString();

document.querySelector('.total-population').textContent =
  total.toLocaleString();
document.querySelector('.average-population').textContent = average;
