'use strict';

const LIST_POPULATION = document.querySelectorAll('.population');
const TOTAL_POPULATION = document.querySelector('.total-population');
const AVERAGE_POPULATION = document.querySelector('.average-population');

const LIST_POPULATION_VALUES = Array.from(LIST_POPULATION).map((element) => {
  const CLEAN_VALUE = element.textContent.split(',').join('');

  return Number(CLEAN_VALUE);
});

const AMOUNT_POPULATION_VALUE = LIST_POPULATION_VALUES.reduce(
  (totalPopulation, population) => totalPopulation + population,
  0,
);

TOTAL_POPULATION.textContent = AMOUNT_POPULATION_VALUE.toLocaleString('en-US');

AVERAGE_POPULATION.textContent = (
  AMOUNT_POPULATION_VALUE / LIST_POPULATION_VALUES.length
).toLocaleString('en-US');
