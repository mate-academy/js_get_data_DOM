'use strict';

const collection = document.getElementsByClassName('population');
const population = [];
let total = 0;
let average = 0;

for (let i = 0; i < collection.length; i++) {
  const num = collection[i].innerText.replace(/,/g, '');

  population.push(parseInt(num));
}

total = population.reduce((acc, curr) => {
  return acc + curr;
}, 0);

average = total / population.length;

document.getElementsByClassName('total-population')[0].innerText = total;
document.getElementsByClassName('average-population')[0].innerText = average;
