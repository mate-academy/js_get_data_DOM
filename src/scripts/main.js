'use strict';

const searchSpan = document.querySelectorAll('span.population');

const cleanArr = [...searchSpan].map((span) => {
  const clearArr = span.textContent.trim().replaceAll(',', '');

  return +clearArr;
});

const totalPopulation = cleanArr.reduce((sum, current) => sum + current, 0);
const averagePopulation = Math.round(totalPopulation / cleanArr.length);

const formattedTotal = totalPopulation.toLocaleString('en-US');
const formattedAverage = averagePopulation.toLocaleString('en-US');

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = formattedTotal;
averageSpan.textContent = formattedAverage;
