'use strict';

function formatNumber(number) {
  return number.toLocaleString('en-US');
}

const spanElements = document.querySelectorAll('span.population');

let totalValue = 0;
let count = 0;

spanElements.forEach((span) => {
  const textContent = span.textContent;

  const cleanedText = textContent.split(',').join('');

  const populationNumber = Number(cleanedText);

  if (!isNaN(populationNumber)) {
    totalValue += populationNumber;
    count++;
  }
});

const averageValue = totalValue / count;

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

averageSpan.textContent = formatNumber(averageValue);
totalSpan.textContent = formatNumber(totalValue);
