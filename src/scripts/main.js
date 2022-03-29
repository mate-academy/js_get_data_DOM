'use strict';

const masive = document.querySelectorAll('.population');
const masiveNumber = [...masive].map(
  ke => Number(ke.textContent.replace(/,/g, '')));
const resultTotal = masiveNumber.reduce((sum, x) => sum + x, 0);
const resultAverage = resultTotal / masiveNumber.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.innerHTML = `${resultTotal.toLocaleString().replace(/\s/g, ',')}`;
average.innerHTML = `${resultAverage.toLocaleString().replace(/\s/g, ',')}`;
