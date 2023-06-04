'use strict';

const items = document.querySelectorAll('.population');
const itemsAll = [...items].map(item => item.innerHTML.split(','));
const allNumbers = itemsAll.map(item => +item.join(''));
const total = allNumbers.reduce((a, b) => a + b);
const totalpopulation = document.querySelector('.total-population');

totalpopulation.innerHTML = total;

const averagepopulation = document.querySelector('.average-population');

const average = total / allNumbers.length;

averagepopulation.innerHTML = average;
