'use strict';

// write your code here
const populationElements = document.querySelectorAll('span.population');

const numbers = [];

for (const el of populationElements) {
  const value = Number(el.textContent.replace(/,/g, ''));

  if (!Number.isNaN(value)) {
    numbers.push(value);
  }
}

const total = numbers.reduce((sum, n) => sum + n, 0);
const average = numbers.length ? total / numbers.length : 0;

const format = (n) => n.toLocaleString('en-US');

document.querySelector('span.average-population').textContent = format(average);
document.querySelector('span.total-population').textContent = format(total);
