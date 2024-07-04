'use strict';

// write your code here

let total = 0;
let average = 0;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');
const ELEMENTS = document.querySelectorAll('.population');

ELEMENTS.forEach((element) => {
  const value = Number(element.textContent.split(',').join(''));

  if (!isNaN(value)) {
    total += value;
  }
});

average = total / ELEMENTS.length;

totalPopulation.textContent = total.toLocaleString('en-US');
averagePopulation.textContent = average.toLocaleString('en-US');
