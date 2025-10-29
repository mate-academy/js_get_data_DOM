'use strict';

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

const populationOfCountries = document.querySelectorAll('.population');

const arrOfPopulationOfCountries = [...populationOfCountries].map((index) => {
  const clean = index.textContent.replaceAll(',', '').trim();
  const num = Number(clean);

  if (!Number.isNaN(num) && clean !== '') {
    return num;
  } else {
    return 0;
  }
});

const totalAmount = arrOfPopulationOfCountries.reduce((acc, i) => {
  return acc + i;
}, 0);

const averageValue = totalAmount / arrOfPopulationOfCountries.length;

const totalAmountStr = totalAmount.toLocaleString();
const averageValueStr = averageValue.toLocaleString();

totalPopulation.textContent = totalAmountStr;
averagePopulation.textContent = averageValueStr;
