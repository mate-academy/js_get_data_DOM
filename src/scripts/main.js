'use strict';

// write your code here
const populationElement = document.getElementsByClassName('population');
const numbers = [];
let total = 0;
let average = 0;

for (let i = 0; i < populationElement.length; i++) {
  const element = populationElement[i];
  const text = element.textContent;
  const number = Number(text.replace(/,/g, ''));

  numbers.push(number);
}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

average = total / numbers.length;

const averageElement = document.getElementsByClassName('average-population')[0];
const totalElement = document.getElementsByClassName('total-population')[0];

const formattedTotal = total.toLocaleString();
const formattedAverage = average.toLocaleString();

averageElement.textContent = formattedAverage;
totalElement.textContent = formattedTotal;
