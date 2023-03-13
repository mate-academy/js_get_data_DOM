'use strict';

const population = document.querySelectorAll('.population');
const spanTotal = document.querySelector('.total-population');
const spanAverage = document.querySelector('.average-population');
const arrWithPopulation = [...population]
  .map(element => +element.innerHTML.replace(/,/g, ''));

const total = arrWithPopulation.reduce((a, b) => a + b, 0);
const average = total / 10;

function getFormatNum(num) {
  return num.toLocaleString('en-US');
}

spanTotal.textContent = getFormatNum(total);
spanAverage.textContent = getFormatNum(average);
