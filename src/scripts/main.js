'use strict';

// write your code here
const totalPopulationEl = document.querySelector('.total-population');
const averagePopulationEl = document.querySelector('.average-population');
const spanElement = [...document.querySelectorAll('.population')];

const dataValues = spanElement
  .map((el) => el.textContent)
  .map((str) => Number(str.replace(/,/g, '')));

const totalValue =
  dataValues.length > 0 ? dataValues.reduce((a, b) => a + b, 0) : 0;
const averageValue =
  dataValues.length > 0 ? Math.round(totalValue / dataValues.length) : 0;

totalPopulationEl.textContent = totalValue.toLocaleString('en-US');
averagePopulationEl.textContent = averageValue.toLocaleString('en-US');
