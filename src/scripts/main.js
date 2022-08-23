'use strict';

const populationList = document.querySelectorAll('.population');
const countriesAmount = document.querySelectorAll('.list__item').length;

const totalPopulation = [...populationList]
  .map((amount) => Number(amount.innerText.replace(/,/g, '')))
  .reduce((a, b) => a + b, 0);

const averagePopulation = totalPopulation / countriesAmount;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const totalPopWithCommas = numberWithCommas(totalPopulation);
const averagePopWithCommas = numberWithCommas(averagePopulation);

document
  .getElementsByClassName('total-population')[0]
  .innerText = totalPopWithCommas;

document
  .getElementsByClassName('average-population')[0]
  .innerText = averagePopWithCommas;
