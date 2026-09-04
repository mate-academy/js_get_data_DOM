'use strict';

const populationElements = document.querySelectorAll('.population');

const populations = [...populationElements].map((el) => {
  return Number(el.textContent.replaceAll(',', ''));
});

const total = populations.reduce((sum, num) => sum + num, 0);

const average = total / populations.length;

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
