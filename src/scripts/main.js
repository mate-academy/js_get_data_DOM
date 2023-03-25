'use strict';

const textCollection = document.querySelectorAll('.population');

const arr = [...textCollection];
const textArray = [];

for (const item of arr) {
  const textData = item.textContent;
  const digitData = Number(textData.split(',').join(''));

  textArray.push(digitData);
}

const total = textArray.reduce((start, acc) => (start + acc), 0);
const average = total / textArray.length;

const modifiedTotal = total.toLocaleString('en-Us');
const modifiedAverage = average.toLocaleString('en-Us');

const totalCalculate = document.querySelector('.total-population');
const averageCalculate = document.querySelector('.average-population');

totalCalculate.textContent = modifiedTotal;
averageCalculate.textContent = modifiedAverage;
