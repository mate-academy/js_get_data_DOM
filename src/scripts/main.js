'use strict';

// write your code here
const nodeValues = document.querySelectorAll('span.population');
const populationValues = [...nodeValues].map((span) => {
  return Number(span.textContent.replace(/,/g, ''));
});
const totalNumber = populationValues.reduce((acc, value) => acc + value, 0);

const averageNumber = Math.floor(totalNumber / populationValues.length);

const formattedTotal = totalNumber.toLocaleString('en-US');
const formattedAverage = averageNumber.toLocaleString('en-US');

const average = document.querySelector('span.average-population');
const total = document.querySelector('span.total-population');

total.textContent = formattedTotal;
average.textContent = formattedAverage;
