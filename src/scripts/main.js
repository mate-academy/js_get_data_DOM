'use strict';

const populations = [...document.querySelectorAll('.population')];

const numbers = [];

for (const population of populations) {
  const raw = population.textContent.trim();
  const number = Number(raw.replace(/,/g, ''));

  numbers.push(number);
}

const allNumbers = numbers.filter((n) => !Number.isNaN(n));
const total = allNumbers.reduce((acc, val) => acc + val, 0);

const average = Math.round(total / allNumbers.length);

const formatter = new Intl.NumberFormat('en-US');

const formattedTotal = formatter.format(total);
const formattedAverage = formatter.format(average);

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;

// console.log(formattedTotal);
// console.log(formattedAverage);
