'use strict';

const spans = document.querySelectorAll('.population');
const numbers = [];

spans.forEach((span) => {
  const clean = span.textContent.replace(/\D/g, '');

  if (clean !== '') {
    numbers.push(+clean);
  }
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = numbers.length > 0 ? total / numbers.length : 0;
const formattedTotal = total.toLocaleString('en-US').replace(/,/g, ' ');
const formattedAverage = Math.round(average)
  .toLocaleString('en-US')
  .replace(/,/g, ' ');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = formattedTotal;
averageSpan.textContent = formattedAverage;
