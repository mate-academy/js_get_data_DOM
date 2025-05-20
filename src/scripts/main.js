'use strict';

const spanValues = document.querySelectorAll('.population');
const population = document.querySelector('.total-population');
const averageContent = document.querySelector('.average-population');

const arrayValues = Array.from(spanValues).map((span) => span.textContent);
const arrayNumbers = [];

let total = 0;
let average = 0;

for (const element of arrayValues) {
  arrayNumbers.push(Number(element.replace(/,/g, '')));
}

// eslint-disable-next-line no-param-reassign
total += arrayNumbers.reduce((sum, num) => (sum += num), 0);

average = total / arrayNumbers.length;

population.textContent = total.toLocaleString('en-US');
averageContent.textContent = average.toLocaleString('en-US');
