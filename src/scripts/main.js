'use strict';

// write your code here
let t = 0;

document.querySelectorAll('.population').forEach((el) => {
  const cleaned = el.textContent.replace(/,/g, '');
  const num = parseFloat(cleaned);

  if (!isNaN(num)) {
    t += num;
  }
});

const avarage = Math.round(t / 9).toLocaleString('en-US');
const tootal = t.toLocaleString('en-US');

document.querySelector('.total-population').textContent = tootal;
document.querySelector('.average-population').textContent = avarage;
