'use strict';

const averagePop = document.querySelector('.average-population');
const totalPop = document.querySelector('.total-population');
const popArr = [...document.querySelectorAll('.population')];

const formatPop = popArr.map(node => {
  return Number(node.textContent.split(',').join(''));
});

const popSum = formatPop.reduce((sum, num) => sum + num);

totalPop.textContent = popSum.toLocaleString('en-US');
averagePop.textContent = (popSum / formatPop.length).toLocaleString('en-US');
