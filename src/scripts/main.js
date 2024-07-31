'use strict';

const population = [...document.querySelectorAll('.population')];
const popArr = population.map((item) => item.textContent.split(',').join(''));

const totalCount = popArr.reduce((acc, item) => acc + +item, 0);
const averageCount = totalCount / popArr.length;

const totalPop = document.querySelector('.total-population');
const averagePop = document.querySelector('.average-population');

totalPop.textContent = totalCount.toLocaleString('en');
averagePop.textContent = averageCount.toLocaleString('en');
