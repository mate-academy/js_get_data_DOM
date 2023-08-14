'use strict';
// write your code here

const populationElements = document.querySelectorAll('.population');

const totalPopulation = [...populationElements]
  .reduce((acc, element) =>
    acc + Number(element.textContent.trim().replace(/,/g, '')), 0);

const averagePopulation = totalPopulation / populationElements.length;

function formatNumberWithCommas(number) {
  return number.toLocaleString('en-US');
}

const totalPopulationElement = document.querySelector('.total-population');
const averagePopulationElement = document.querySelector('.average-population');

totalPopulationElement.textContent
= formatNumberWithCommas(totalPopulation);

averagePopulationElement.textContent
= formatNumberWithCommas(averagePopulation);
