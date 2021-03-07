'use strict';

const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
let count = 0;

for (const people of population) {
  count += +people.textContent.replace(/,/g, '');
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}

total.textContent = numberWithCommas(count);
average.textContent = numberWithCommas(count / 10);
