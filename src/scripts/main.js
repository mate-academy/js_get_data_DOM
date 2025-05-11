'use strict';

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

const populationsStr = Array.from(document.querySelectorAll('.population'));
const populationsNum = populationsStr.map((population) => {
  return parseInt(population.textContent.replaceAll(',', ''));
});

const total = populationsNum.reduce((acc, val) => acc + val, 0);
const average = total / populationsNum.length;

totalSpan.textContent = total.toLocaleString('en-US');
averageSpan.textContent = Math.round(average).toLocaleString('en-US');
