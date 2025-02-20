'use strict';

const popElementsArr = [...document.querySelectorAll('.population')];

const populationArr = [];

popElementsArr.map((el) =>
  // eslint-disable-next-line prettier/prettier
  populationArr.push(parseInt(el.innerHTML.replace(/,/g, ''))));

const totalPopulationResult = document.querySelector('.total-population');
const averagePopulationResult = document.querySelector('.average-population');

const populationSum = populationArr.reduce((accumulator, curentValue) => {
  return accumulator + curentValue;
}, 0);

const populationAverage = Math.round(populationSum / populationArr.length);

totalPopulationResult.innerHTML = populationSum.toLocaleString('en-US');
averagePopulationResult.innerHTML = populationAverage.toLocaleString('en-US');
