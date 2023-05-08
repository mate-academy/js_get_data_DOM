'use strict';

const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
let count = 0;
const populationsConv = [ ...populations ];

for (const elem of populationsConv) {
  const convArr = elem.textContent.split(',').join('');

  count = count + +convArr;
}

const average = count / populationsConv.length;

totalPopulation.textContent = count;
averagePopulation.textContent = average;
