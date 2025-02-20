'use strict';

const elements = document.querySelectorAll('.population');

const callback = (el) => +el.textContent.replace(/,/g, '');

const populationNumbers = [...elements].map(callback);

const totalSum = populationNumbers.reduce((sum, current) => sum + current, 0);
const averageSum = totalSum / populationNumbers.length;

const totalPopElem = document.querySelector('.total-population');
const avgPopElem = document.querySelector('.average-population');

totalPopElem.textContent = totalSum.toLocaleString('en-US');
avgPopElem.textContent = averageSum.toLocaleString('en-US');
