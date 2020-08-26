'use strict';

// write your code here
const populationList = document.querySelectorAll('.population');
const populationsInfo = [...populationList].map(
  item => item.textContent.split(',').join('')
);
const populations = populationsInfo.map(Number);

const total = populations.reduce((a, b) => a + b);
const average = total / populations.length;

const totalSpan = document.querySelector('.total-population');

totalSpan.textContent = total
  .toLocaleString()
  .replace(/\s/g, ',');

const averageSpan = document.querySelector('.average-population');

averageSpan.textContent = average
  .toLocaleString()
  .replace(/\s/g, ',');
