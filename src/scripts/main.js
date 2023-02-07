'use strict';

const array = [];
const spans = document.querySelectorAll('.population');

for (const population of spans) {
  array.push(population.innerText);
}

const numbersArray = array.map(elem => +elem.replace(/,/g, ''));

const total = numbersArray.reduce((a, b) => a + b, 0);
const average = total / 10;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.innerText = total.toLocaleString('en-US');
averageSpan.innerText = average.toLocaleString('en-US');
