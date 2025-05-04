'use strict';

const populationElements = document.querySelectorAll('.population');

const numbers = [];

populationElements.forEach((element) => {
  const text = element.textContent;
  const cleanText = text.split(',').join('');
  const number = parseInt(cleanText, 10);

  numbers.push(number);
});

const total = numbers.reduce((sum, current) => sum + current, 0);

const average = total / numbers.length;

const formattedTotal = total.toLocaleString('en-US');
const formattedAverage = Math.round(average).toLocaleString('en-US');

document.querySelector('.total-population').textContent = formattedTotal;
document.querySelector('.average-population').textContent = formattedAverage;
