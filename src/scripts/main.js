'use strict';

const spans = document.querySelectorAll('.population');
const numbers = Array.from(spans).map((span) => {
  const text = span.textContent;
  const cleaned = text.replace(/,/g, '');

  return Number(cleaned);
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = numbers.length > 0 ? total / numbers.length : 0;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = average.toLocaleString('en-US');
totalSpan.textContent = total.toLocaleString('en-US');
