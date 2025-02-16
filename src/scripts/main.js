'use strict';

const spans = document.querySelectorAll('.population');

const numbers = Array.from(spans).map((span) => {
  const text = span.innerText.split(',').join('');

  return Number(text);
});

let sum = 0;

for (const number of numbers) {
  sum += number;
}

const average = sum / numbers.length;

const formattedSum = sum.toLocaleString();
const formattedAverage = average.toLocaleString();

document.querySelector('.total-population').innerText = formattedSum;
document.querySelector('.average-population').innerText = formattedAverage;
