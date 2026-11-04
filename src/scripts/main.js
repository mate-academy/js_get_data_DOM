'use strict';

const pop = document.querySelectorAll('.population');
const average = document.querySelector('.average-population');
const total = document.querySelector('.total-population');

let totalResult = 0;

pop.forEach((x) => {
  const num = Number(x.textContent.split(',').join(''));

  totalResult += num;
});

average.textContent = Math.floor(totalResult / pop.length).toLocaleString(
  'en-US',
);

total.textContent = totalResult.toLocaleString('en-US');
