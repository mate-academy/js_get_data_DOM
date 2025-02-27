'use strict';

const populationSpans = document.querySelectorAll(`[class="population"]`);

const values = [...populationSpans].map((country) => {
  return parseInt(country.innerHTML.replaceAll(',', ''));
});

const total = values.reduce((prev, number) => prev + number, 0);
const average = Math.round(total / values.length);

document.querySelector(`[class="total-population"]`).innerHTML =
  new Intl.NumberFormat('en-US').format(total);

document.querySelector(`[class="average-population"]`).innerHTML =
  new Intl.NumberFormat('en-US').format(average);
