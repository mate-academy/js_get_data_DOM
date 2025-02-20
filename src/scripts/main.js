'use strict';

const spans = document.querySelectorAll('span.population');
const averagePopulation =
  document.getElementsByClassName('average-population')[0];
const totalPopulation = document.getElementsByClassName('total-population')[0];

let total = 0;

for (const span of spans) {
  const textContent = span.textContent.trim().replaceAll(',', '');
  const value = Number(textContent);

  total += value;
}

const mid = total / spans.length;

averagePopulation.textContent = mid.toLocaleString('en-US');
totalPopulation.textContent = total.toLocaleString('en-US');
