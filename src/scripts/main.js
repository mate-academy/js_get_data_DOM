'use strict';

// write your code here

const populationElements = document.querySelectorAll('span.population');

let total = 0;
let count = 0;

populationElements.forEach((element) => {
  const numberString = element.textContent.replace(/,/g, '');
  const number = parseFloat(numberString);

  if (!isNaN(number)) {
    total += number;
    count++;
  }
});

const average = total / count;

const totalFormatted = total.toLocaleString();
const averageFormatted = average.toLocaleString();

document.querySelector('.total-population').textContent = totalFormatted;
document.querySelector('.average-population').textContent = averageFormatted;
