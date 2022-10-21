'use strict';

const population = document.querySelectorAll('.population');
let total = 0;
let populationCount = 0;

population.forEach(country => {
  const normalizedPopulationNum = +country.innerText.split(',').join('');

  total += normalizedPopulationNum;
  populationCount++;
});

const totalOnPage = document.querySelector('.total-population');
const averageOnPage = document.querySelector('.average-population');

totalOnPage.innerText = total.toLocaleString('en-US');
averageOnPage.innerText = (total / populationCount).toLocaleString('en-US');
