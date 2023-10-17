'use strict';

const elements = [...document.querySelectorAll('.population')];

const numbers = [];

elements.forEach(element => {
  numbers.push(parseInt(element.textContent.replace(/,/g, '')));
});

const total = numbers.reduce((sum, number) => sum + number, 0);

const average = total / numbers.length;

document.querySelector('.total-population')
  .innerHTML = total.toLocaleString('en-US');

document.querySelector('.average-population')
  .innerHTML = average.toLocaleString('en-US');
