'use strict';

const populationCountries = document.querySelectorAll('.population');
const populations = Array.from(populationCountries).map((el) => {
  const value = parseInt(el.textContent.replace(/,/g, ''), 10);

  if (!el || isNaN(value)) {
    return 0; // або null
  } else {
    return value;
  }
});
const total = populations.reduce((sum, num) => sum + num, 0);
const average = total / populations.length;

const averageSpan = document.querySelector('.average-population');
const totalSpan = document.querySelector('.total-population');

averageSpan.textContent = Math.round(average).toLocaleString();
totalSpan.textContent = total.toLocaleString();
