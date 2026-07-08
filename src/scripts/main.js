'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

const populationNumbers = [...populationSpans]
  .map((span) => {
    const text = span.textContent;
    const cleanedText = text.replace(/,/g, '');

    if (!isNaN(cleanedText) && cleanedText !== '') {
      return Number(cleanedText);
    }
  })
  .filter(Number.isFinite);

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populationNumbers.length);

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total.toLocaleString();
averageSpan.textContent = average.toLocaleString();
