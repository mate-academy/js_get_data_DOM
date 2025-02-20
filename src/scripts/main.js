'use strict';

const populationElements = [...document.querySelectorAll('span.population')];

const populations = populationElements
  .map((el) => parseFloat(el.innerText.replace(/,/g, '')))
  .filter((num) => !isNaN(num));

const total = populations.reduce((acc, curr) => acc + curr, 0);
const average = populations.length > 0 ? total / populations.length : 0;

const numberFormatter = new Intl.NumberFormat('en-US');
const formattedTotal = numberFormatter.format(total);
const formattedAverage = numberFormatter.format(average);

const totalSpan = document.querySelector('span.total-population');
const averageSpan = document.querySelector('span.average-population');

if (totalSpan) {
  totalSpan.innerText = formattedTotal;
}

if (averageSpan) {
  averageSpan.innerText = formattedAverage;
}
