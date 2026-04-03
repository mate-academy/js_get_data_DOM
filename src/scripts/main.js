'use strict';

const populationSpans = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

let total = 0;
const count = populationSpans.length;

populationSpans.forEach((span) => {
  const text = span.textContent;
  const cleanText = text.replace(/,/g, '');
  const num = Number(cleanText);

  if (!isNaN(num)) {
    total += num;
  }
});

const average = total / count;

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = Math.round(average).toLocaleString('en-US');
