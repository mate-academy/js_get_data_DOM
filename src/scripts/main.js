'use strict';

const populationElements = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationNum = [...populationElements].map(element => {
  const text = element.textContent;

  return +text.split(',').join('');
});

const total = populationNum.reduce((sum, current) => sum + current, 0);
const average = total / populationNum.length;
const formatTotal = total.toLocaleString('en-US');
const formatAverage = average.toLocaleString('en-US');

totalPopulation.textContent = formatTotal;
averagePopulation.textContent = formatAverage;
