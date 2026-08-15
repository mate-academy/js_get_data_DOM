'use strict';

const populations = document.querySelectorAll('span.population');
const numbers = [...populations].map((population) => {
  const text = population.textContent.replaceAll(' ', '');

  return Number(text);
});

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

const average = total / numbers.length;

const averageElement = document.querySelector('.average-population');
const totalElement = document.querySelector('.total-population');

averageElement.textContent = average.toLocaleString();
totalElement.textContent = total.toLocaleString();
