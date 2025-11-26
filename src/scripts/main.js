'use strict';

const spans = document.querySelectorAll('span.population');
const numbers = [];

for (const span of spans) {
  const text = span.textContent.trim();
  const cleanText = text.replace(/[^0-9]/g, '');
  const number = Number(cleanText);

  numbers.push(number);
}

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

function format(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

document.querySelector('.average-population').textContent = format(average);
document.querySelector('.total-population').textContent = format(total);
