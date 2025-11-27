'use strict';

// write your code here

const elements = document.querySelectorAll('.population');
const numbers = [];

for (let i = 0; i < elements.length; i++) {
  const num = Number(elements[i].textContent.replace(/,/g, ''));

  numbers.push(num);
}

const total = numbers.reduce((acc, num) => acc + num, 0);
const average = total / numbers.length;

const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

totalPopulation.textContent = total.toLocaleString();
averagePopulation.textContent = average.toLocaleString();
