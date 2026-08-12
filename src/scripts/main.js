'use strict';

function documentElementToNumber(elements) {
  const contentOfElem = elements.map((elementNode) => elementNode.textContent);

  const clearValOfElem = contentOfElem.map((line) => line.split(',').join(''));

  const numOfElemValue = clearValOfElem.map((clearLine) => Number(clearLine));

  return numOfElemValue;
}

function average(total, countOfElements) {
  return Math.round(total / countOfElements);
}

function sum(numsForSum) {
  return numsForSum.reduce((prev, num) => prev + num, 0);
}

const countOfPopulation = [...document.querySelectorAll('.population')];

const averageHTML = document.querySelector('.average-population');
const sumHTML = document.querySelector('.total-population');

const sumOfPopulation = sum(documentElementToNumber(countOfPopulation));

const averageOfPopulation = average(
  sumOfPopulation,
  documentElementToNumber(countOfPopulation).length,
);

averageHTML.textContent = String(averageOfPopulation.toLocaleString('en-US'));
sumHTML.textContent = String(sumOfPopulation.toLocaleString('en-US'));
