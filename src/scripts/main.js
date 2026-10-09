'use strict';

const populationSpans = document.querySelectorAll('span.population');

const populations = [...populationSpans].map((span) => {
  const rawStr = span.textContent;
  const cleanStr = rawStr.replaceAll(',', '');

  return Number(cleanStr);
});

let total = 0;

for (const population of populations) {
  total += population;
}

const average = Math.round(total / populations.length);

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
