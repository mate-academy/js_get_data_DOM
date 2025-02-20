'use strict';

// write your code here
const POP_SEL = '.population';
const TOTAL_SEL = '.total-population';
const AVG_SEL = '.average-population';

const popItems = document.querySelectorAll(POP_SEL);

const toNumber = (text) => Number(text.split(',').join(''));

const populations = Array.from(popItems).map((pop) => {
  return toNumber(pop.textContent);
});

const calcTotal = (arr) => arr.reduce((total, curr) => total + curr, 0);

const totalPop = calcTotal(populations);

const calcAvg = (total, count) => (count > 0 ? total / count : 0);

const avgPop = calcAvg(totalPop, populations.length);

const formatNum = (num) => num.toLocaleString();

const totalFormatted = formatNum(totalPop);
const avgFormatted = formatNum(Math.round(avgPop));

document.querySelector(TOTAL_SEL).textContent = totalFormatted;
document.querySelector(AVG_SEL).textContent = avgFormatted;
