'use strict';

const popArr = [...document.querySelectorAll('.population')];
const popArrWC = popArr.map((item) => item.textContent.split(',').join(''));

const totalCount = popArrWC.reduce((acc, item) => acc + +item, 0);
const averageCount = totalCount / popArrWC.length;

const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

totalPop.textContent = totalCount.toLocaleString('en');
averagePop.textContent = averageCount.toLocaleString('en');
