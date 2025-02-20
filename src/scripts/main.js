'use strict';

const spans = document.querySelectorAll('.population');
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const numbers = Array.from(spans)
  .map((span) => span.textContent.trim().replace(/,/g, ''))
  .filter((text) => !isNaN(text) && text !== '')
  .map(Number);

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / numbers.length);

if (totalPopulationElement) {
  totalPopulationElement.textContent = total.toLocaleString('en-US');
}

if (averagePopulationElement) {
  averagePopulationElement.textContent = average.toLocaleString('en-US');
}
