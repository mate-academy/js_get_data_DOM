'use strict';

const spans = document.querySelectorAll('.population');

const spanTexts = [];

spans.forEach((span) => {
  spanTexts.push(span.textContent.trim());
});

let total = 0;

for (let i = 0; i < spanTexts.length; i++) {
  const spanText = spanTexts[i];
  const number = parseInt(spanText.replace(/,/g, ''), 10);

  // eslint-disable-next-line no-unused-vars
  total += number;
}

// eslint-disable-next-line no-unused-vars
const average = total / spanTexts.length;
const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

if (totalPopulationElement) {
  totalPopulationElement.textContent = formattedTotal;
}

if (averagePopulationElement) {
  averagePopulationElement.textContent = formattedAverage;
}
