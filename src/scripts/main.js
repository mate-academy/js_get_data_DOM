'use strict';

const populationList = [...document.querySelectorAll('.population')];
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

function getNumberFromString(str) {
  return +str.split(',').join('');
}

function thousandsSeparator(num) {
  const source = '' + num;
  const result = [];

  for (let i = source.length; i > 0; i -= 3) {
    result.unshift(source.substring(i - 3, i));
  }

  return result.join(',');
}

const totalPopulation = populationList.reduce((res, el) => {
  return res + getNumberFromString(el.innerText);
}, 0);

const averagePopulation = totalPopulation / populationList.length;

totalSpan.innerText = thousandsSeparator(totalPopulation);
averageSpan.innerText = thousandsSeparator(averagePopulation);
