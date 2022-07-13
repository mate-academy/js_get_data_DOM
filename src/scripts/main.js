'use strict';

const numberFormatter = Intl.NumberFormat('en-US');

const test = document.getElementsByClassName('population');
const valuesOfPopulationsElements = [...test].map(({ innerText }) =>
  +innerText.replace(/,/g, ''));

const totalPopulation = valuesOfPopulationsElements
  .reduce((previousValue, currentValue) =>
    previousValue + currentValue, 0);
const averagePopulation = totalPopulation / valuesOfPopulationsElements.length;

document.getElementsByClassName('total-population')[0]
  .innerText = numberFormatter.format(totalPopulation);

document.getElementsByClassName('average-population')[0]
  .innerText = numberFormatter.format(averagePopulation);
