'use strict';

const allPop = [...document.querySelectorAll('.population')];
const totalPop = document.querySelector('.total-population');
const averPop = document.querySelector('.average-population');

const num = allPop.map(item => +(item.textContent.split(',').join('')));
const totalValue = num.reduce((total, current) => total + current);
const averageValue = totalValue / allPop.length;

totalPop.textContent = totalValue.toLocaleString('en-US');
averPop.textContent = averageValue.toLocaleString('en-US');