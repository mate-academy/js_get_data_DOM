'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

const populationNumbers = [...populationSpans].map(span => {
  const text = span.textContent;
  const cleanedText = text.replace(/,/g, '');
  return Number(cleanedText);
});

const total = populationNumbers.reduce((sum, num) => sum + num, 0);
const avarage = Math.round(total / populationNumbers.length);

const totalSpan = document.querySelector('.total-population');
const avarageSpan = document.querySelector('.avarage-population');

totalSpan.textContent = total.toLocaleString();
avarageSpan.textContent = avarage.toLocaleString();
