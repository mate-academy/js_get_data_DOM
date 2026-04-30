'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');

const populations = Array.from(populationElements, (el) => {
  const number = Number(el.textContent.replace(/,/g, ''));

  return number;
});

const total = populations.reduce((sum, num) => sum + num, 0);

const average = total / populations.length;

const formatNumber = (num) => num.toLocaleString('en-US');

const totalEl = document.querySelector('.total-population');

const averageEl = document.querySelector('.average-population');

totalEl.textContent = formatNumber(total);
averageEl.textContent = formatNumber(Math.round(average));
