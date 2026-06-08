'use strict';

const populationElements = document.querySelectorAll('.population');
const totalOutput = document.querySelector('.total-population');
const averageOutput = document.querySelector('.average-population');

let totalSum = 0;

for (const element of populationElements) {
  const text = element.textContent;
  const cleanText = text.replaceAll(',', '');

  totalSum += Number(cleanText);
}

const averageSum = Math.round(totalSum / populationElements.length);

totalOutput.textContent = totalSum.toLocaleString();
averageOutput.textContent = averageSum.toLocaleString();
