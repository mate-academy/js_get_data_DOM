'use strict';

// write your code here
const pop = document.querySelectorAll('span.population');
const arr = [...pop].map(item => item.innerText.replace(/,/g, ''));

const arr2 = arr.map(el => Number(el));

const average = arr2.reduce((a, b) => (a + b)) / arr2.length;
const total = arr2.reduce((a, b) => a + b, 0);

const finalAverage = average.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const finalTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const oldTotal = document.getElementsByClassName('total-population')[0];
const oldAverage = document.getElementsByClassName('average-population')[0];

const newTotal = document.createElement('span');

newTotal.innerHTML = finalTotal;
oldTotal.parentNode.replaceChild(newTotal, oldTotal);

const newAverage = document.createElement('span');

newAverage.innerHTML = finalAverage;
oldAverage.parentNode.replaceChild(newAverage, oldAverage);
