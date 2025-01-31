'use strict';

const countries = document.querySelectorAll('span.population');
let total = 0;
const countriesCount = countries.length;

for (const element of countries) {
  total += +element.textContent.split(',').join('');
}

const average = Math.floor(total / countriesCount);

const averageSpan = document.querySelector('span.average-population');
const totalSpan = document.querySelector('span.total-population');

averageSpan.textContent = average
  .toString()
  .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

totalSpan.textContent = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
