'use strict';

const list = document.querySelectorAll('.population');
const numbers = [...list].map(item => item.innerText);
let total = 0;
const nf = new Intl.NumberFormat('en-US');

for (const num of numbers) {
  total += parseFloat(num.replace(/,/g, ''));
}

const average = total / numbers.length;

document.querySelector('.total-population').textContent = nf.format(total);
document.querySelector('.average-population').textContent = nf.format(average);
