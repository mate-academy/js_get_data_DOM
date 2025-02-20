'use strict';

const populationList = [...document.querySelectorAll('.population')];
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

function getNumberFromString(str) {
  return +str.split(',').join('');
}

const totalPopulation = populationList.reduce((res, el) => {
  return res + getNumberFromString(el.innerText);
}, 0);

const averagePopulation = totalPopulation / populationList.length;

totalSpan.innerText = totalPopulation.toLocaleString('en');
averageSpan.innerText = averagePopulation.toLocaleString('en');
