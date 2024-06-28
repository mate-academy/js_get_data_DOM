'use strict';

const populations = document.querySelectorAll('.population');
const popTotal = document.querySelector('.total-population');
const popAvg = document.querySelector('.average-population');
const popList = [];

for (const pop of populations) {
  popList.push(parseInt(pop.textContent?.replaceAll(',', '')));
}

const averg = Math.floor(
  popList.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0),
);

const sum = popList.reduce((acc, cur, i, arr) => acc + cur);

popTotal.textContent = sum.toLocaleString('en-US');
popAvg.textContent = averg.toLocaleString('en-US');
