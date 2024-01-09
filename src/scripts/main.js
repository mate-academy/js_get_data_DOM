'use strict';

const popylationNodeList = document.querySelectorAll('.population');
const populationArray
= Array.from(popylationNodeList).map(node => node.textContent);
const numberArray = populationArray.map(amount => +amount.split(',').join(''));
const totalPopulation = numberArray.reduce((acc, current) => acc + current, 0);
const averagePopulation = totalPopulation / numberArray.length;

const total = totalPopulation.toLocaleString('en-US');
const average = averagePopulation.toLocaleString('en-US');
const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

totalSpan.textContent = total;
averageSpan.textContent = average;
