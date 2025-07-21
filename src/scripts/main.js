'use strict';

// write your code here
const elements = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');
const arr = [];

for (let i = 0; i < elements.length; i++) {
  arr.push(elements[i].textContent);
}

const totalPopulation = arr
  .map((num) => Number(num.replace(/,/g, '')))
  .reduce((acc, curr) => acc + curr);

const avgPopulation = totalPopulation / arr.length;

total.textContent = totalPopulation.toLocaleString('en-US');
average.textContent = Math.floor(avgPopulation).toLocaleString('en-US');
