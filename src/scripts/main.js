'use strict';

const populars = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const averange = document.querySelector('.average-population');
let sum = 0;

[...populars].forEach(item => {
  const number = item.textContent.replace(/,/g, '');

  sum += +number;

  return sum;
});

total.textContent = new Intl.NumberFormat('en-US').format(sum);

averange.textContent
= new Intl.NumberFormat('en-US').format(sum / [...populars].length);
