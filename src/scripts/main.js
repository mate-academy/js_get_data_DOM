'use strict';

// write your code here
const populationSpans = document.querySelectorAll('.population');

const numbers = Array.from(populationSpans).map((span) => {
  const value = span.textContent.replace(/[^\d]/g, '');
  const num = Number(value);

  return isNaN(num) ? 0 : num;
});

const total = numbers.reduce((acc, val) => acc + val, 0);
const average = numbers.length ? total / numbers.length : 0;

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

const totalElem = document.querySelector('.total-population');

if (totalElem) {
  totalElem.textContent = formattedTotal;
}

const averageElem = document.querySelector('.average-population');

if (averageElem) {
  averageElem.textContent = formattedAverage;
}
