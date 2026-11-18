'use strict';

const spanElements = document.querySelectorAll('span.population');
const total = document.querySelector('span.total-population');
const average = document.querySelector('span.average-population');

let sum = 0;

spanElements.forEach((span) => {
  const cleanText = span.textContent.replace(/,/g, '').trim();
  const num = Number(cleanText);

  if (cleanText !== '' && !isNaN(num)) {
    sum += num;
  }
});

if (total) {
  total.textContent = sum.toLocaleString('en-US');
}

if (average) {
  const avgValue = spanElements.length > 0 ? sum / spanElements.length : 0;

  average.textContent = avgValue.toLocaleString('en-US');
}
