'use strict';

const spans = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const numbers = Array.from(spans)
  .map((span) => span.textContent.split(',').join(''))
  .map(Number);

const sum = numbers.reduce((acc, number) => acc + number, 0);
const average = sum / spans.length;

function thousand(num) {
  return num.toLocaleString('en-US');
}

totalPopulation.textContent = thousand(sum);
averagePopulation.textContent = thousand(average);
