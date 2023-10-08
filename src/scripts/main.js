'use strict';

// write your code here
const populationsCollection = document.querySelectorAll('.population');
const numberOfCountries = document.querySelectorAll('.list .list__item').length;
const totalEl = document.querySelector('span.total-population');
const avgEl = document.querySelector('span.average-population');

let total = 0;
let average = 0;

for (let i = 0; i < populationsCollection.length; i++) {
  total += parseFloat((populationsCollection[i].textContent).replace(/,/g, ''));
}

average = total / numberOfCountries;

const totalFormatted = total.toLocaleString('en-US');
const averageFormatted = average.toLocaleString('en-US');

avgEl.textContent = averageFormatted;
totalEl.textContent = totalFormatted;
