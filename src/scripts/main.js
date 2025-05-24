'use strict';

const data = document.querySelectorAll('.population');

const popNumbers = [];

for (const text of data) {
  popNumbers.push(text.textContent);
}

const numbersArray = popNumbers.map((element) => +element.split(',').join(''));
const total = numbersArray.reduce((acc, curr) => acc + curr, 0);
const average = Math.ceil(total / numbersArray.length);
const formatAverage = average.toLocaleString('en-US');
const formatTotal = total.toLocaleString('en-US');

const averagePop = document.querySelector('.average-population');
const totalPop = document.querySelector('.total-population');

averagePop.textContent = formatAverage;
totalPop.textContent = formatTotal;
