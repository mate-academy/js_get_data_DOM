'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populations = Array.from(document.querySelectorAll('.population'));

const totalAmaunt = populations.reduce((accum, e) => (
  accum + +e.textContent.replaceAll(',', '')), 0);

function thousandsSeparator(num) {
  return num.toLocaleString().replaceAll(',', ' ');
}

total.textContent = thousandsSeparator(totalAmaunt);
average.textContent = thousandsSeparator(totalAmaunt / populations.length);
