'use strict';

// write your code here
const populationNumbers = document.querySelectorAll('.population');
const populationArray = Array.from(populationNumbers).map((el) => {
  return Number(el.textContent.replace(/,/g, ''));
});

const populationTotal = populationArray.reduce((acc, num) => acc + num, 0);
const populationAverage = populationTotal / populationArray.length;

const populationTotalText = document.querySelector('.total-population');
const populationAverageText = document.querySelector('.average-population');

populationTotalText.innerHTML = populationTotal.toLocaleString();
populationAverageText.innerHTML = populationAverage.toLocaleString();
