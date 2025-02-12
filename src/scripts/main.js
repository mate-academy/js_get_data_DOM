'use strict';

const populationSpans = document.querySelectorAll('.population');

const numbers = Array.from(populationSpans).map((span) => {
  const text = span.textContent.replace(/,/g, '');
  const number = Number(text);

  return isNaN(number) ? 0 : number;
});

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = total / numbers.length;

const formatNumber = (num) => num.toLocaleString();

const formattedTotal = formatNumber(total);
const formattedAverage = formatNumber(Math.round(average));

document.querySelector('.average-population').textContent = formattedAverage;
document.querySelector('.total-population').textContent = formattedTotal;
