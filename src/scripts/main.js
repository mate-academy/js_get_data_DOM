'use strict';

const populationElements = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const toNumber = (text) => Number(text.replace(/,/g, ''));

const populations = [...populationElements]
  .map((element) => toNumber(element.textContent))
  .filter((population) => !isNaN(population));

const total = populations.reduce((sum, population) => sum + population, 0);
const average = total / populations.length;

totalElement.textContent = total.toLocaleString('en-US');
averageElement.textContent = average.toLocaleString('en-US');
