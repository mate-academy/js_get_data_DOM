'use strict';

const list = document.querySelectorAll('.population');
const totalElement = document.querySelector('.total-population');
const averageElement = document.querySelector('.average-population');

const numberArr = [...list].map(item =>
  parseInt(item.innerText.replace(/,/g, '')));
const total = numberArr.reduce((a, b) => a + b, 0);
const average = total / numberArr.length;

const strTotal = String(total).split('');
const strAverage = String(average).split('');

let reversResultTotal = '';
let reversResultAverage = '';
let count = 0;

for (let i = strTotal.length - 1; i >= 0; i--) {
  count++;
  reversResultTotal += strTotal[i];

  if (count % 3 === 0 && strTotal.length !== count) {
    reversResultTotal += ',';
  }
}

const resultTotal = reversResultTotal.split('').reverse().join('');
totalElement.innerText = resultTotal;

count = 0;

for (let i = strAverage.length - 1; i >= 0; i--) {
  count++;
  reversResultAverage += strAverage[i];

  if (count % 3 === 0 && strAverage.length !== count) {
    reversResultAverage += ',';
  }
}

const resultAverage = reversResultAverage.split('').reverse().join('');
averageElement.innerText = resultAverage;
