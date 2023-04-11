'use strict';

const collection = document.querySelectorAll('.population');

const values = [...collection]
  .map(item => +(item.innerText.replaceAll(',', '')));

const total = values.reduce((sum, x) => sum + x);
const average = total / values.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.innerText = total.toLocaleString();
averagePopulation.innerText = average.toLocaleString();
