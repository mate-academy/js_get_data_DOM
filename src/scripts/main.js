'use strict';

const totalPopulationValue = document.querySelector('.total-population');
const averagePopulationValue = document.querySelector('.average-population');
const populationList = document.querySelectorAll('.population');
const populationAmountsList = [...populationList]
  .map(item => item.textContent)
  .map(item => +item.replace(/,/g, ''));
const populationTotalAmount = populationAmountsList
  .reduce((sum, item) => sum + item, 0);
const populationTotalAvarage = Math.round(
  populationTotalAmount / populationAmountsList.length);

totalPopulationValue.textContent = populationTotalAmount
  .toLocaleString('en');

averagePopulationValue.textContent = populationTotalAvarage
  .toLocaleString('en');
