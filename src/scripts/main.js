'use strict';

const textCollection = document.querySelectorAll('.population');

const normalizedData = [];

for (const item of textCollection) {
  const textData = item.textContent;
  const digitData = Number(textData.split(',').join(''));

  normalizedData.push(digitData);
}

const total = normalizedData.reduce((start, acc) => (start + acc), 0);
const average = total / normalizedData.length;

const modifiedTotal = total.toLocaleString('en-Us');
const modifiedAverage = average.toLocaleString('en-Us');

const totalCalculate = document.querySelector('.total-population');
const averageCalculate = document.querySelector('.average-population');

totalCalculate.textContent = modifiedTotal;
averageCalculate.textContent = modifiedAverage;
