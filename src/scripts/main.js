'use strict';

const population = document.querySelectorAll('.population');
const totalField = document.querySelector('.total-population');
const averageField = document.querySelector('.average-population');

const populationArr = [...population];
let totalPopulation = 0;
let averagePopulation = 0;

for (const countryPopul of populationArr) {
  totalPopulation += +(countryPopul.innerText.replaceAll(',', ''));
}
averagePopulation = totalPopulation / populationArr.length;

totalField.innerText = totalPopulation.toLocaleString('en-US');
averageField.innerText = averagePopulation.toLocaleString('en-US');
