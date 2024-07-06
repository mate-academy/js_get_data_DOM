'use strict';

// write your code here
const populationsElem = document.querySelectorAll('.population');

let populations = [];

populationsElem.forEach((elem) => populations.push(elem.innerHTML));

populations = populations.map((el) => el.replaceAll(',', ''));

const TOTAL = populations.reduce((a, b) => +a + +b, 0);

const AVERAGE = TOTAL / populations.length;

const totalElem = document.querySelector('.total-population');
const averageElem = document.querySelector('.average-population');

totalElem.textContent = TOTAL.toLocaleString('en-US');
averageElem.textContent = AVERAGE.toLocaleString('en-US');
