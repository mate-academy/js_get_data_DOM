'use strict';

// write your code here
const spansArr = [...document.getElementsByClassName('population')];
let populations = 0;

for (const key of spansArr) {
  populations += Number(key.textContent.replaceAll(',', ''));
}

const averagePopulation = Math.round(populations / spansArr.length);
const totalpop = document.getElementsByClassName('total-population');
const averagepop = document.getElementsByClassName('average-population');

totalpop[0].textContent = populations.toLocaleString('en-US');
averagepop[0].textContent = averagePopulation.toLocaleString('en-US');
