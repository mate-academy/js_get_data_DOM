'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const populationOfCountries = document.querySelectorAll('.population');
const arrOfPopulationOfCountries = [...populationOfCountries].map((index) => {
  return index.textContent.replaceAll(',', '');
});

const totalAmount = arrOfPopulationOfCountries.reduce((acc, i) => {
  return acc + Number(i);
}, 0);
const averageValue = totalAmount / arrOfPopulationOfCountries.length;

const totalAmountStr = totalAmount.toLocaleString();
const averageValueStr = averageValue.toLocaleString();

totalPopulation.textContent = totalAmountStr;
averagePopulation.textContent = averageValueStr;
