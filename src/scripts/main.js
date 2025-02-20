'use strict';

const allPopulations = document.getElementsByClassName('population');
const totalTag = document.getElementsByClassName('total-population');
const averageTag = document.getElementsByClassName('average-population');

let total = 0;

for (const population of allPopulations) {
  total += +population
    .outerText
    .replaceAll(',', '');
}

const average = total / allPopulations.length;

totalTag[0].textContent = total.toLocaleString('en-US');
averageTag[0].textContent = average.toLocaleString('en-US');
