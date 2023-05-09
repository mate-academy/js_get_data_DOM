'use strict';

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const populations = Array.from(document.querySelectorAll('.population'));

const totalAmaunt = populations.reduce((accum, e) => (
  accum + +e.textContent.replaceAll(',', '')), 0);

total.textContent = totalAmaunt.toLocaleString();
average.textContent = (totalAmaunt / populations.length).toLocaleString();
