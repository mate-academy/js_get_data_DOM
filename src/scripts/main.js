'use strict';

function makeNumber(val) {
  if (!val.match(/a-zA-z/)) {
    return +val.replace(/,/g, '');
  } else {
    throw new Error('Wrong data');
  }
}

const totalPopElement = document.querySelector('.total-population');
const avgPopElement = document.querySelector('.average-population');
const populationElements = [...document.querySelectorAll('.population')];
const countriesAmount = populationElements.length;

const populationsNumbers = populationElements.map(
  item => makeNumber(item.innerText)
);

const populationTotal = populationsNumbers.reduce((sum, cur) => sum + cur, 0);

const populationAvg = populationTotal / countriesAmount;

totalPopElement.innerText = populationTotal.toLocaleString('en-EN');
avgPopElement.innerText = populationAvg.toLocaleString('en-EN');
