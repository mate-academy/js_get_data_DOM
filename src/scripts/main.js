/* eslint-disable no-console */
'use strict';

const elements = [...document.querySelectorAll('.population')];

const totalPopulationArr = elements
  .map((elem) => elem.innerText)
  .map((elem) => elem.split(',').join(''))
  .map((elem) => Number(elem));

const total = totalPopulationArr.reduce((prev, curr) => prev + curr, 0);
const average = total / totalPopulationArr.length;

const totalElement = document.querySelector('.total-population');

totalElement.innerText = total.toLocaleString();

const averageElement = document.querySelector('.average-population');

averageElement.innerText = average.toLocaleString();
