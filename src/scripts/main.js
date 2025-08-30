'use strict';

const populationSpans = document.querySelectorAll('span.population');
let total = 0;
let count = 0;

populationSpans.forEach((span) => {
  const text = span.textContent.replace(/,/g, '').trim();
  const number = parseInt(text, 10);

  if (!isNaN(number)) {
    total += number;
    count++;
  }
});

const averages = count > 0 ? total / count : 0;

const formatter = new Intl.NumberFormat('en-US');

document.querySelector('span.total-population').textContent =
  formatter.format(total);

document.querySelector('span.average-population').textContent =
  formatter.format(Math.round(averages));
