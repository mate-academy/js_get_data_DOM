'use strict';

const collection = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const arr = [...collection].map(elem => +elem.textContent.split(',').join(''));

const totalResult = arr.reduce((a, b) => a + b);
const averageResult = totalResult / arr.length;

total.textContent = totalResult.toLocaleString('en-US');
average.textContent = averageResult.toLocaleString('en-US');
