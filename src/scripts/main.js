'use strict';

const populationCount = document.querySelectorAll('.population');

const allSum = [...populationCount].reduce((_, item) => +item
  .textContent.replace(/[^0-9]/g, ''), 0);

const averageSum = allSum / populationCount.length;

const totalCount = document.querySelector('.total-population');
const averageCount = document.querySelector('.average-population');

totalCount.textContent = allSum.toLocaleString('en-US');
averageCount.textContent = averageSum.toLocaleString('en-US');
