'use strict';

// write your code here
const populations = [...document.querySelectorAll('.population')];
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const total = populations.reduce((sum, item) => {
  const text = item.textContent;
  const number = +text.split(',').join('');

  const result = sum + number;

  return result;
}, 0);

const average =
  populations.length === 0 ? 0 : Math.round(total / populations.length);

totalSpan.textContent = numberWithCommas(total);
averageSpan.textContent = numberWithCommas(average);

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
