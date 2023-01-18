'use strict';

const population = document.querySelectorAll('.population');
const arrOfStr = [...population].map(element => element.innerHTML);
const arrOfNumber = arrOfStr.map(string => +string.split(',').join(''));

let total = arrOfNumber.reduce((sum, value) => sum + value, 0);
let average = total / arrOfNumber.length;

total = total.toLocaleString('en-US');
average = average.toLocaleString('en-US');

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average;
