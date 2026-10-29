'use strict';

const populationElements = [...document.querySelectorAll('.population')];

const totalPopulation = populationElements.reduce((sum, element) => {
    const population = parseInt(element.textContent.replace(/,/g, ''), 10);
    return sum + population;
}, 0);
const avaragePopulation = totalPopulation / populationElements.length;

const avaragePopulationElement = document.querySelector('.average-population');
avaragePopulationElement.textContent = formatNumber(avaragePopulation);

const totalPopulationElement = document.querySelector('.total-population');
totalPopulationElement.textContent = formatNumber(totalPopulation);

function formatNumber(num) {
  const [intPart, fracPart] = String(num).split('.');
  const sign = intPart.startsWith('-') ? '-' : '';
  const digits = sign ? intPart.slice(1) : intPart;

  const withCommas = digits.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return sign + withCommas + (fracPart !== undefined ? '.' + fracPart : '');
}
