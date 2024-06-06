'use strict';

const populationElements = [...document.querySelectorAll('.population')];
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

function parseNumber(str) {
  const clearComaStr = str.replace(/,/g, '');
  const number = Number(clearComaStr);

  return isNaN(number) ? 0 : number;
}

const totalPopulation = populationElements.reduce((sum, el) => {
  const numberOfPeople = parseNumber(el.innerText);

  return sum + numberOfPeople;
}, 0);

const numberFormatter = Intl.NumberFormat('en-US');
const formattedTotal = numberFormatter.format(totalPopulation);

const averagePopulation = totalPopulation / populationElements.length;
const formattedAverage = numberFormatter.format(averagePopulation);

totalElement.innerText = formattedTotal;
averageElement.innerText = formattedAverage;
