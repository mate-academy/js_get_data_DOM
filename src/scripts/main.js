'use strict';

const isThousandsSeparator = (res) => res.toLocaleString().replace(/\s/g, ',');

const allValueOfCountry = [];

const allOfCountry = [ ...document.querySelectorAll('.population') ];

allOfCountry.map(item =>
  allValueOfCountry.push(+item.textContent.split(',').join('')));

const sumValueOfAllCountry = allValueOfCountry.reduce((acamulate, current) =>
  acamulate + current);
const avarageValueOfAllCountry = (sumValueOfAllCountry / allOfCountry.length);

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = isThousandsSeparator(sumValueOfAllCountry);

averagePopulation.textContent = isThousandsSeparator(avarageValueOfAllCountry);
