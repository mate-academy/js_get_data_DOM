'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const totalValue = document.querySelector('.total-population');
const averageValue = document.querySelector('.average-population');

let total = 0;

population.forEach((el) => {
  const num = el.textContent;
  const toNumber = Number(num.replace(/,/g, ''));

  total += toNumber;
});

const average = total / population.length;
// eslint-disable-next-line no-unused-vars
const formatNumber = (num) => num.toLocaleString('en-US');

totalValue.textContent = formatNumber(total);
averageValue.textContent = formatNumber(Math.round(average));
