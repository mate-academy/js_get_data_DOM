'use strict';

// write your code here
const people = document.querySelectorAll('span.population');
const peopleSorted = [...people].map(item => item.innerText.replace(/,/g, ''));

const peopleToNumber = peopleSorted.map(el => Number(el));

const average = peopleToNumber.reduce((a, b) =>
  (a + b)) / peopleToNumber.length;
const total = peopleToNumber.reduce((a, b) => a + b, 0);

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
