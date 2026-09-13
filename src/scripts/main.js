'use strict';

const elemants = document.querySelectorAll('span.population');
const numbers = Array.from(elemants).map((str) => {
  const text = str.textContent.trim();

  return Number(text.replaceAll(',', ''));
});

const totalSum = numbers.reduce((acc, cur) => acc + cur, 0);
const average = Math.round(totalSum / numbers.length);

const formatter = new Intl.NumberFormat('en-US');
const formattedTotalSum = formatter.format(totalSum);
const formattedAverage = formatter.format(average);

document.querySelector('span.total-population').textContent = formattedTotalSum;
document.querySelector('span.average-population').textContent = formattedAverage;

