'use strict';

const spanPopulation = document.querySelectorAll('span.population');

const texts = [ ...spanPopulation ].map(text =>
  Number(text.textContent.split(',').join('')));

const total = texts.reduce((sum, value) =>
  sum + value).toLocaleString('en-US');
const average = (texts.reduce((sum, value) =>
  sum + value) / texts.length).toLocaleString('en-US');

const totalPopulation = document.querySelector('span.total-population');
const averagePopulation = document.querySelector('span.average-population');

totalPopulation.textContent = total;
averagePopulation.textContent = average;
