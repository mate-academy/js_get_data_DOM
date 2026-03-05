'use strict';

// write your code here
const populationAmounts = [...document.body.querySelectorAll('.population')];
const populationTexts = populationAmounts.map((el) => el.textContent);
const cleanedTexts = populationTexts.map((txt) => txt.replace(/,/g, '').trim());
const populationNumbers = cleanedTexts.map((text) => Number(text));

const sum = populationNumbers.reduce((num, start) => num + start, 0);
const averageSum = sum / populationNumbers.length;

const sumElement = document.body.querySelector('.total-population');
const averageElement = document.body.querySelector('.average-population');

const formattedSum = sum.toLocaleString('en-US');
const formattedAverage = averageSum.toLocaleString('en-US', {
  maximumFractionDigits: 0,
});

sumElement.textContent = formattedSum;
averageElement.textContent = formattedAverage;
