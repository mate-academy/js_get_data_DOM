'use strict';

const spans = document.querySelectorAll('.population');

const textSpan = Array.from(spans, (span) => span.textContent);

let averagePopulation = 0;
let totalPopulation = 0;

const numbers = textSpan.map((str) => {
  const removedCommas = str.replace(/,/g, '');

  return parseInt(removedCommas);
});

for (const num of numbers) {
  if (!isNaN(num)) {
    totalPopulation += num;
    averagePopulation = totalPopulation / numbers.length;
  }
}

const totalElement = document.querySelector('.total-population');

totalElement.textContent = totalPopulation.toLocaleString('en-US');

const averageElement = document.querySelector('.average-population');

averageElement.textContent = averagePopulation.toLocaleString('en-US');
