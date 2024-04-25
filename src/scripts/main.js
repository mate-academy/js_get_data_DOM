'use strict';

const listOfPopulationsSpan = document.querySelectorAll('.population');

const arrOfPopulationsNum = Array.from(listOfPopulationsSpan).map(
  (span) => +span.innerText.replace(/\D/g, ''),
);
const total = arrOfPopulationsNum.reduce((prev, curr) => prev + curr, 0);

const average = total / arrOfPopulationsNum.length;

const totalSpan = document.querySelector('.total-population');
const averageSpan = document.querySelector('.average-population');

averageSpan.textContent = average.toLocaleString('en-US');
totalSpan.textContent = total.toLocaleString('en-US');
