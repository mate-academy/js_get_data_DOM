'use strict';

const populationSpans = document.querySelectorAll('.population');

const populations = [];

populationSpans.forEach((span) => {
  const text = span.textContent;
  const number = Number(text.replace(/,/g, ''));

  if (!isNaN(number)) {
    populations.push(number);
  }
});

let total = 0;

populations.forEach((value) => {
  total += value;
});

const average = total / populations.length;

document.querySelector('.total-population').textContent =
  total.toLocaleString('en-US');

document.querySelector('.average-population').textContent =
  Math.round(average).toLocaleString('en-US');
