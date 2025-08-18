'use strict';

const populationSpans = document.querySelectorAll('span.population');
const populationData = [...populationSpans].map((el) => {
  const text = el.textContent;

  return Number(text.split(',').join(''));
});

const totalPopulation = populationData.reduce(
  (sum, current) => sum + current,
  0,
);
const averagePopulation = totalPopulation / populationData.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = totalPopulation.toLocaleString('en-US');
averageSpan.textContent = averagePopulation.toLocaleString('en-US');
