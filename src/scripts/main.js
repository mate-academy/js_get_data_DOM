'use strict';

// write your code here
const population = document.querySelectorAll('span.population');
const averageField = document.querySelector('.average-population');
const totalField = document.querySelector('.total-population');

let total = 0;
const counts = [];

population.forEach((el) => {
  const value = Number(el.textContent.replace(/,/g, ''));

  if (Number.isFinite(value)) {
    total += value;
    counts.push(value);
  }
});

if (counts.length > 0) {
  const average = total / counts.length;

  totalField.textContent = total.toLocaleString('en-US');
  averageField.textContent = average.toLocaleString('en-US');
}
