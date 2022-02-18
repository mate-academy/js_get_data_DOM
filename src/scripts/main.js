'use strict';

const popColl = document.querySelectorAll('.population');
const popArr = [...popColl].map((item) => {
  return +item.innerText.replace(/,/g, '');
});

const popTotal = popArr.reduce((a, b) => a + b);
const popTotalUS = popTotal.toLocaleString('en-US');

const popAverage = popTotal / popArr.length;
const popAverageUS = popAverage.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerText = popTotalUS;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerText = popAverageUS;
