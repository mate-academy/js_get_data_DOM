'use strict';

const population = document.querySelectorAll('.population');

const populationArray = [...population].map(
  (item) => parseInt(item.textContent.replace(/,/g, ''), 10), // eslint-disable-line
);// eslint-disable-line

const totalList = document.querySelector('.total-population');
const averageList = document.querySelector('.average-population');

const total = populationArray.reduce((sum, value) => sum + value, 0);
const average = Math.round(total / populationArray.length);

const formatNumber = (number) => number.toLocaleString('en-US');

totalList.textContent = formatNumber(total);
averageList.textContent = formatNumber(average);
