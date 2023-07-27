'use strict';

const populationElements = document.querySelectorAll('.population');

const totalPopulation = [...populationElements]
  .reduce((acc, element) =>
    acc + Number(element.textContent.trim().replace(/,/g, '')), 0);

const averagePopulation = totalPopulation / populationElements.length;

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

const averagePopulationElement = document.querySelector('.average-population');
const totalPopulationElement = document.querySelector('.total-population');

averagePopulationElement.textContent
= formatNumberWithCommas(averagePopulation);

totalPopulationElement.textContent
= formatNumberWithCommas(totalPopulation);
