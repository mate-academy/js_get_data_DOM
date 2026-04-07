'use strict';

const populationSpans = document.querySelectorAll('.population');
const populationArray = Array.from(populationSpans);
const populationNumbers = populationArray.map((span) => {
  const text = span.textContent;
  const cleanText = text.replace(/[^\d]/g, '');
  const number = Number(cleanText);

  return number;
});

const total = populationNumbers.reduce((acc, num) => {
  return acc + num;
}, 0);
const average = Math.round(total / populationNumbers.length);
const totalFormatted = total.toLocaleString();
const averageFormatted = average.toLocaleString();
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalFormatted;
averageSpan.textContent = averageFormatted;
