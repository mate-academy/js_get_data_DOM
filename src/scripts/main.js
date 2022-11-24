'use strict';

function convertToNum(number) {
  if (!number.match(/a-zA-z/)) {
    return +number.replace(/,/g, '');
  } 
}

const totalPopClass = document.querySelector('.total-population');
const averagePopClass = document.querySelector('.average-population');

const populationSpans = [...document.querySelectorAll('.population')];

const popSpansToNum = populationSpans.map(num => convertToNum(num.innerText));
const totalPopulation = popSpansToNum.reduce((a, b) => a + b);
const averagePopulation = totalPopulation / populationSpans.length;

totalPopClass.textContent = totalPopulation.toLocaleString('en-US');

averagePopClass.textContent = averagePopulation.toLocaleString('en-US');
