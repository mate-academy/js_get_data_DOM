'use strict';

const populationElements = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const populations = [];

populationElements.forEach((element) => {
  const cleanedValue = element.textContent.replace(/,/g, '').trim();
  const number = Number(cleanedValue);

  if (!Number.isNaN(number)) {
    populations.push(number);
  }
});

const total = populations.reduce((sum, current) => sum + current, 0);
const average = populations.length > 0 ? total / populations.length : 0;

if (totalElement) {
  totalElement.textContent = total.toLocaleString('en-US');
}

if (averageElement) {
  averageElement.textContent = average.toLocaleString('en-US');
}
