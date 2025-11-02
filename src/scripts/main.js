'use strict';

const popul = document.querySelectorAll('.population');

let sum = 0;
let average = 0;

for (const ch of popul) {
  const str = ch.textContent.replace(/,/g, '');
  const num = Number(str);

  if (!isNaN(num)) {
    sum += num;
  }
}
average = Math.floor(sum / popul.length);

document.querySelector('.total-population').textContent =
  sum.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  average.toLocaleString('en-US');
