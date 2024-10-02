'use strict';

const elementsWithData = [...document.querySelectorAll('.population')];
const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

const totalValue = elementsWithData.reduce((acc, element) => {
  const value = element.textContent.split(',').join('');

  // eslint-disable-next-line no-param-reassign
  acc += +value;

  return acc;
}, 0);
const averagePopulation = Math.round(totalValue / elementsWithData.length);

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const formatedTotal = formatNumber(totalValue);
const formatedAverage = formatNumber(averagePopulation);

totalPopulationElement.textContent = formatedTotal;
averagePopulationElement.textContent = formatedAverage;
