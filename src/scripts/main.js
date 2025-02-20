'use strict';

const populationCountry = document.querySelectorAll('span');
const len = document.querySelectorAll('.population').length;

const avg = document.querySelector('.average-population');

avg.textContent = len;

const total = document.querySelector('.total-population');

let massPupulation = [];

for (let i = 0; i < len; i++) {
  let str = populationCountry[i].textContent;

  str = str.replaceAll(',','');

  massPupulation.push(Number(str));
}

let totalSum = 0;

for (const elem in massPupulation) {
  totalSum += massPupulation[elem];
}

const newTotal = new Intl.NumberFormat("ja-JP").format(totalSum);
const newAvg = new Intl.NumberFormat("ja-JP").format(Math.round(totalSum / len));

total.textContent = newTotal;
avg.textContent = newAvg;



