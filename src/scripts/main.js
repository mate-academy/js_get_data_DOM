'use strict';

const numbers = document.getElementsByClassName('population');
const totalElement = document.getElementsByClassName('total-population')[0];
const averageElement = document.getElementsByClassName('average-population')[0];

let total = 0;
let count = 0;

for (const number of numbers) {
  total += Number(number.innerText.replace(/,/g, ''));
  count++;
}

const average = total / count;

totalElement.innerText = total.toLocaleString();
averageElement.innerText = average.toLocaleString();
