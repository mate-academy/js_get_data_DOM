'use strict';

// write your code here
const populationElements = document.querySelectorAll('.population');
const populationNumbers = [];

populationElements.forEach((element) => {
  const populationNumber = parseInt(element.textContent.replace(/,/g, ''));

  if (!isNaN(populationNumber)) {
    populationNumbers.push(populationNumber);
  }
});

let total = populationNumbers.reduce((acc, num) => acc + num, 0);
let average = total / populationNumbers.length;

total = total.toLocaleString('en-US');
average = average.toLocaleString('en-US');

document.querySelector('.average-population').textContent = average;
document.querySelector('.total-population').textContent = total;
