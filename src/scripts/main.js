'use strict';

const spansList = document.querySelectorAll('span.population');
let sum = 0;

for (const i of spansList) {
  let tmp = i.textContent.replace(/,/g, '');

  tmp = parseInt(tmp);
  sum += tmp;
}

const total = document.querySelector('span.total-population');

total.textContent = sum.toLocaleString('en-US');

const countCountries = spansList.length;

const ever = document.querySelector('span.average-population');

ever.textContent = (sum / countCountries).toLocaleString('en-US');
