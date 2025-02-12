'use strict';

const populationElements = document.querySelectorAll('.population');
const totalElem = document.querySelector('.total-population');
const averageElem = document.querySelector('.average-population');
const arr = [];

populationElements.forEach((elem) => arr.push(elem.textContent));

function formatArray(array) {
  return array.map((item) => +item.split(',').join(''));
}

function transformNumberToString(number) {
  return number.toLocaleString('en-US');
}

function addDataToSite(element, data) {
  element.textContent = data;
}

const formatedArr = formatArray(arr);
const total = formatedArr.reduce((acc, curr) => acc + curr, 0);
const average = total / arr.length;

const formatedTotal = transformNumberToString(total);
const formatedAverage = transformNumberToString(average);

addDataToSite(totalElem, formatedTotal);
addDataToSite(averageElem, formatedAverage);
