'use strict';

// const { getVersion } = require("jest");

const populationText = document.querySelectorAll('.population');
const arrSum = [];

for (const el of populationText) {
  arrSum.push(+el.textContent.split(',').join(''));
}

const totalSum = arrSum.reduce((a, b) => a + b, 0);
const averageSum = totalSum / arrSum.length;

const averageValue = averageSum.toLocaleString('en-US');
const totatValue = totalSum.toLocaleString('en-US');

document.querySelector('.average-population').textContent = averageValue;
document.querySelector('.total-population').textContent = totatValue;
