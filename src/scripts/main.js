'use strict';

// write your code here
const population = [...document.querySelectorAll('span.population')];
const populationNumbers = [];
const resultsOfNumbers = [];
const results = [];

for (const el of population) {
  const text = el.textContent;
  const number = +text.replace(/,/g, '');

  populationNumbers.push(number);
}

const sum = populationNumbers.reduce((acc, el) => acc + el, 0);
const average = sum / populationNumbers.length;

resultsOfNumbers.push(sum);
resultsOfNumbers.push(average);

for (const el of resultsOfNumbers) {
  const result = String(el);
  const parts = [];

  let part = '';

  for (let i = result.length - 1; i >= 0; i--) {
    part = result[i] + part;

    if (part.length === 3) {
      parts.unshift(part);
      part = '';
    }
  }

  if (part.length > 0) {
    parts.unshift(part);
  }

  results.push(parts.join(','));
}

const textSum = document.querySelector('span.total-population');
const textAverage = document.querySelector('span.average-population');

textSum.textContent = results[0];
textAverage.textContent = results[1];
