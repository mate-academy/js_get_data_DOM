'use strict';

const populationTags = [...document.querySelectorAll('span.population')];
const populationAmounts = populationTags.map(
  (tag) => +tag.textContent.replaceAll(',', ''),
);
const totalAmount = populationAmounts.reduce(
  (total, amount) => total + amount,
  0,
);
const countriesAmount = populationAmounts.length || 1;
const averageAmount = Math.round(totalAmount / countriesAmount);
const totalAmountTag = document.querySelector('span.total-population');
const averageAmountTag = document.querySelector('span.average-population');

totalAmountTag.textContent = totalAmount.toLocaleString('en-US');
averageAmountTag.textContent = averageAmount.toLocaleString('en-US');
