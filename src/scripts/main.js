'use strict';

const spanDataByPopulation = document.querySelectorAll('span.population');
const populations = Array.from(spanDataByPopulation).map((span) => {
  const str = span.textContent;
  const withoutCommas = str.replace(/,/g, '');
  const num = Number(withoutCommas);

  return num;
});

const total = populations.reduce((acc, value) => acc + value, 0);
const average = Math.floor(total / populations.length);

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
