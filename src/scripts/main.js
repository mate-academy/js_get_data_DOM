'use strict';

// write your code here
const spans = document.getElementsByClassName('population');
const population = [];

for (const span of spans) {
  population.push(Number(span.innerHTML.split(',').join('')));
}

const total = population.reduce((acc, curr) => {
  return acc + curr;
}, 0);

const avarege = total / 10;

const totalPrint = document.getElementsByClassName('total-population');

totalPrint[0].innerHTML = total.toLocaleString('en-US');

const averegePrint = document.getElementsByClassName('average-population');

averegePrint[0].innerHTML = avarege.toLocaleString('en-US');
