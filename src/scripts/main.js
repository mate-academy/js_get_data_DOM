'use strict';

const populationItem = document.querySelectorAll('.population');
const totalItem = document.querySelector('.total-population');
const averageItem = document.querySelector('.average-population');
const numberOfCountries = document.querySelectorAll('.list__item').length;

const numberOfPopulation = [...populationItem].map(el => el.textContent);
const normalizedNumbers = numberOfPopulation.map(el => +el.split(',').join(''));
const totalNumber = normalizedNumbers.reduce((prev, current) => prev + current);
const thousandsSeparator = new Intl.NumberFormat('en-us');

totalItem.textContent = thousandsSeparator.format(+totalNumber);

averageItem.textContent = thousandsSeparator.format(
  totalNumber / numberOfCountries
);
