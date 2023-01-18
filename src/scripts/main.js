'use strict';

const population = document.querySelectorAll('.population');
const arrOfStr = [...population].map(element => element.innerHTML);
const arrOfNumber = arrOfStr.map(string => +string.split(',').join(''));

const totalPopulation = document.querySelector('.total-population');

let total = arrOfNumber.reduce((sum, value) => sum + value, 0);
total = total.toLocaleString('en');

totalPopulation.innerHTML = total;

const averagePopulation = document.querySelector('.average-population');

let average = total / arrOfNumber.length;
average = average.toLocaleString('en');


averagePopulation.innerHTML = average;