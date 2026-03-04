'use strict';
const populations = document.querySelectorAll('.population');
const totalPopulation = document.querySelector('.total-population');
const averagePopulation = document.querySelector('.average-population');

let values = [];
let sum = 0;
let average = 0;

populations.forEach((element, index)=> {
    values.push(element.textContent);
    values[index] = Number(values[index].split(',').join(''))
});

console.log(values);

sum = values.reduce((sum, el) => sum + el, 0);

average = Math.round(sum / values.length);

averagePopulation.textContent = average.toLocaleString('en-US')

totalPopulation.textContent = sum.toLocaleString('en-US');