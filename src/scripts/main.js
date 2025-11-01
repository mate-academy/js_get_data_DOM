'use strict';

const populations = document.querySelectorAll('.population');

const texts = [...populations].map((span) => span.textContent.trim());
const numbers = texts
  .map((text) => Number(text.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const total = numbers.reduce((acc, val) => acc + val, 0);
const average = numbers.length ? total / numbers.length : 0;

const formattedTotal = total.toLocaleString();
const formattedAverage = Math.round(average).toLocaleString();

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
