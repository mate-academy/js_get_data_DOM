'use strict';

// write your code here
const spans = document.querySelectorAll('span.population');
const texts = Array.from(spans).map((span) => {
  return span.textContent.trim().replace(/,/g, '');
});
const numbers = texts.map((text) => (!isNaN(text) ? Number(text) : null));
const validNumbers = numbers.filter((numb) => numb !== null);
const total = validNumbers.reduce((sum, current) => sum + current, 0);
const average = validNumbers.length > 0 ? total / validNumbers.length : 0;
const formatTotal = total.toLocaleString();
const formatAverage = average.toLocaleString();

document.querySelector('.total-population').textContent = formatTotal;
document.querySelector('.average-population').textContent = formatAverage;
