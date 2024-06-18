'use strict';

const populationOfTheCountries = document.querySelectorAll('.population');
const averagePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

/**
 * @function getTotal
 * @param {NodeListOf<Element>} population
 * @returns {number}
 */
const getTotal = (population) => {
  if (!population) {
  }

  return [...population].reduce((acc, curr) => {
    const number = +curr.textContent.split(',').join('');

    return acc + number;
  }, 0);
};

/**
 * @function getAverage
 * @param {NodeListOf<Element>} population
 * @param {Function} getTotalPopulation
 * @returns {number}
 *
 */

const getAverage = (population, getTotalPopulation) => {
  return getTotalPopulation(population) / population.length;
};

/**
 * @function addNumbersToElement
 * @param {NodeListOf<Element>} populationElements
 * @param {Element} averageElement
 * @param {Element} totalElement
 * @returns {void}
 */

const addNumbersToElement = (
  populationElements,
  averageElement,
  totalElement,
) => {
  const average = getAverage(populationElements, getTotal);
  const total = getTotal(populationElements);

  const toLocalAverage = average.toLocaleString('en-US');
  const toLocalTotal = total.toLocaleString('en-US');

  averageElement.textContent = toLocalAverage;
  totalElement.textContent = toLocalTotal;
};

addNumbersToElement(
  populationOfTheCountries,
  averagePopulation,
  totalPopulation,
);
