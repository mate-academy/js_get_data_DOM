'use strict';

const populations = document.querySelectorAll('.population');

let total = 0;
let count = 0;

populations.forEach((val) => {
  const content = val.textContent.replace(/,/g, '');

  if (!isNaN(Number(content)) && content.trim() !== '') {
    total += Number(content);
    count++;
  }
});

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

const ave = total / count;

document.querySelector('.average-population').textContent =
  ave.toLocaleString('en-US');
