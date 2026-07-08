'use strict';

const populationElements = document.querySelectorAll('.population');
const populations = Array.from(populationElements).map((el) => {
  return parseInt(el.textContent.replace(/,/g, ''));
});
const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;
const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = Math.round(average.toLocaleString());
totalSpan.textContent = total.toLocaleString();
