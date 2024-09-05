'use strict';

// write your code here

const populationTextsArr = Array.from(
  document.querySelectorAll('span.population'),
);

const populationNumbersArr = populationTextsArr.map((span) =>
  Number(span.textContent.replace(/,/g, '')),
);

const total = populationNumbersArr.reduce(
  (sum, currentValue) => sum + currentValue,
  0,
);

const average = total / populationNumbersArr.length;

const totalPopulation = document.querySelector('span.total-population');

const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
