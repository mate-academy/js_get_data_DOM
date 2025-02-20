'use strict';

const populationElements = document.querySelectorAll('span.population');

const populations = Array.from(populationElements)
  .map((element) => element.textContent.trim())
  .map(text => text.replace(/,/g, ''))
  .filter((text) => !isNaN(text && text !== ''))
  .map((text) => Number(text));

const total = populations.reduce((sum, num) => sum + num, 0);

const average = populations.length > 0 ? total / populations.length : 0;

const averageElement = document.querySelector('span.average-population');
const totalElement = document.querySelector('span.total-population');

if (averageElement) {
  averageElement.textContent = average.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

if (totalElement) {
  totalElement.textContent = total.toLocaleString();
}
