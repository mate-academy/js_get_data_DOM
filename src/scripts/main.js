'use strict';

const populationElements = document.querySelectorAll('.population');

const texts = [];
populationElements.forEach(span => {
  texts.push(span.textContent);
})

const numbers = texts.map(text => {
  return parseInt(text.replace(/,/g, ''), 10);
});

const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;

document.querySelector('.total-population').textContent = total.toLocaleString('en-US');;
document.querySelector('.average-population').textContent = average.toLocaleString('en-US');