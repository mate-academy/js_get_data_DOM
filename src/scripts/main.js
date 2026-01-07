'use strict';

const populations = Array.from(document.querySelectorAll('.population'));

let total = 0;

populations.forEach((population) => {
  const value = population.textContent.split(',').join('');

  if (!isNaN(value)) {
    total += Number(value);
  }
});

const average = Math.round(total / populations.length);

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString();
totalElement.textContent = total.toLocaleString();
