'use strict';

const elements = document.querySelectorAll('span.population');

const populationArray = Array.from(elements).map(span => span.textContent);

const arrayNumber = populationArray.map(population => {
  const parsedNumber = parseFloat(population.replaceAll(',', ''));

  return isNaN(parsedNumber) ? 0 : parsedNumber;
});

const total = arrayNumber.reduce((sum, num) => sum + num, 0);
const average = total / arrayNumber.length;

const averageSpan = document.querySelector('span.average-population');

averageSpan.textContent = average.toLocaleString('en-US');

const totalSpan = document.querySelector('span.total-population');

totalSpan.textContent = total.toLocaleString('en-US');
