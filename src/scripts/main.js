'use strict';

const pop = document.querySelectorAll('.population');
const avarage = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

let totalResult = 0;

pop.forEach((x) => {
  const num = Number(x.textContent.split(',').join(''));

  totalResult += num;
});

avarage.textContent = Math.floor(totalResult / 9).toLocaleString('en-US');
total.textContent = totalResult.toLocaleString('en-US');
