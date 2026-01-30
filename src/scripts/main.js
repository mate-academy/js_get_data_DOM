'use strict';

const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');
const populationNodes = document.querySelectorAll('.population');

const populations = Array.from(populationNodes).map((node) => {
  const value = node.textContent.replace(/,/g, '');
  return parseInt(value, 10);
});

const total = populations.reduce((total, value) => total + value, 0);
const average = Math.round(total / populations.length);

totalElement.textContent = total.toLocaleString();
averageElement.textContent = average.toLocaleString();
