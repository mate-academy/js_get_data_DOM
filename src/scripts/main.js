'use strict';

const numbers = document.querySelectorAll('.population');

const populations = [...numbers].map((el) => el.innerText);

const separatedNumbers = populations.join('/');
let modified = '';

for (const number of separatedNumbers) {
  if (number !== ',') {
    modified += number;
  }
}

const newData = modified.split('/');

const parsed = newData.map((el) => parseInt(el));

const total = parsed.reduce((sum, x) => sum + x, 0);

const formattedTotal = total.toLocaleString('en-Us');

const average = (total / parsed.length).toLocaleString('en-Us');

const totalCalculate = document.querySelector('.total-population');
const totalAverage = document.querySelector('.average-population');

totalCalculate.innerText = formattedTotal;
totalAverage.innerText = average;
