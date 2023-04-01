'use strict';

// write your code here

const spanCollection = document.querySelectorAll('.population');
const allData = [];
let finalNumbersData;

for (const number of spanCollection) {
  const textData = number.textContent;

  allData.push(textData);
  finalNumbersData = allData.map(num => Number(num.replace(/,/g, '')));
}

const total = finalNumbersData.reduce((sum, x) => sum + x, 0);
const average = total / finalNumbersData.length;

const totalValue = document.querySelector('.total-population');
const avrgValue = document.querySelector('.average-population');

totalValue.textContent = total.toLocaleString();
avrgValue.textContent = average.toLocaleString();
