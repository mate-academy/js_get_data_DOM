'use strict';

// write your code here
const spans = document.getElementsByClassName('population');
let population = [];

for (const span of spans) {
  population.push(Number(span.innerHTML.split(',').join('')));
};

const total = population.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const avarege = total/10;

const totalPrint = document.getElementsByClassName('total-population');
totalPrint[0].innerHTML = total;

const averegePrint = document.getElementsByClassName('average-population');
averegePrint[0].innerHTML = avarege;

