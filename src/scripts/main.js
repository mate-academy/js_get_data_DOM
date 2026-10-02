'use strict';

const populationElements = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const populations = Array.from(populationElements).map((el) => {
  const cleanText = el.textContent.replace(/,/g, '');

  return Number(cleanText);
});

const total = populations.reduce((acc, curr) => acc + curr, 0);
const average = Math.round(total / populations.length);

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = average.toLocaleString('en-US');
