'use strict';

const spans = document.querySelectorAll('span.population');
const populations = [...spans]
  .map((span) => span.textContent)
  .map((x) => Number(x.replace(/,/g, '')));

const total = populations.reduce((sum, x) => sum + x, 0);
const totalStr = total.toLocaleString('en-US');
const average = Math.floor(total / populations.length);
const averageStr = average.toLocaleString('en-US');

const spanAverage = document.querySelector('.average-population');
const spanTotal = document.querySelector('.total-population');

spanAverage.textContent = averageStr;
spanTotal.textContent = totalStr;
