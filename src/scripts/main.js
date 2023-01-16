'use strict';

// write your code here
const items = document.querySelectorAll('.population');
const arrOfStrings = [...items].map(item => item.innerText);
const arrOfNumbers = arrOfStrings.map(string => +string.split(',').join(''));

let totalPopulation = arrOfNumbers.reduce((sum, number) => sum + number, 0);

let averagePopulation = totalPopulation / arrOfNumbers.length;

totalPopulation = totalPopulation.toLocaleString('en');

averagePopulation = averagePopulation.toLocaleString('en');

const total = document.querySelector('.total-population');

total.innerText = totalPopulation;

const average = document.querySelector('.average-population');

average.innerText = averagePopulation;
