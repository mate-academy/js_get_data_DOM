'use strict';

const spanElements = document.querySelectorAll('span.population');
const numbers = [];

for (const span of spanElements) {
  const cleanedText = span.textContent.replace(/,/g, '');
  const number = Number(cleanedText);

  if (!isNaN(number)) {
    numbers.push(number);
  }
}

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

const totalEl = document.querySelector('.total-population');
const averageEl = document.querySelector('.average-population');

totalEl.textContent = formatNumber(total);
averageEl.textContent = formatNumber(Math.round(average));
