'use strict';

const data = document.querySelectorAll('.population');

const total = Array.from(data).reduce((acc, el) => {
  const cleanNumber = el.textContent.replace(/,/g, '').trim();

  return acc + Number(cleanNumber);
}, 0);

const countOfCountries = document.querySelectorAll('.list__item').length;

const average = total / countOfCountries;

const tagTotal = document.querySelector('.total-population');
const tagAverage = document.querySelector('.average-population');

tagTotal.textContent = total.toLocaleString();

tagAverage.textContent = average.toLocaleString(undefined, {
  maximumFractionDigits: 0,
});
