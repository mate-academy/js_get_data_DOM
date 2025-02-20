'use strict';

const populationSpanArr = [...document.querySelectorAll('.population')];
const populationNumArr = [];

let populationTotal = 0;

for (let i = 0; i < populationSpanArr.length; i++) {
  const spanText = populationSpanArr[i].textContent;
  const populationNum = parseInt(spanText.replace(/,/g, ''), 10);

  populationNumArr.push(populationNum);

  populationTotal += populationNum;
}

const populationAverage = populationTotal / populationNumArr.length;

const totalPopulationSpan = document.querySelector('.total-population');
const averagePopulationSpan = document.querySelector('.average-population');

totalPopulationSpan.textContent = populationTotal.toLocaleString('en-US');
averagePopulationSpan.textContent = populationAverage.toLocaleString('en-US');
