'use strict';

const countries = document.getElementsByClassName('population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

let sum = 0;

for (let i = 0; i < countries.length; i++) {
  let parsedCountry = 0
  parsedCountry = parseInt(countries[i].innerHTML.replace(/,/g, ''));

  sum += parsedCountry;
}
const numberFormatter = new Intl.NumberFormat('en-US');
total.textContent = numberFormatter.format(sum);
average.textContent = numberFormatter.format(Math.round(sum / countries.length));
