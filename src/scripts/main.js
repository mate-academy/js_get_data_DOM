'use strict';

// write your code here
const span = document.querySelectorAll('span.population');
const spanArray = [...span].map(item => item.innerText);
const arrayNum = [];

for (const elem of spanArray) {
  arrayNum.push(+elem.replace(/,/g, ''));
};

const total = arrayNum.reduce((sum, num) => sum + num);
const average = (total / arrayNum.length);

const totalReult = document.querySelector('.total-population');

totalReult.innerText = total.toLocaleString();

const averageResult = document.querySelector('.average-population');

averageResult.innerText = average.toLocaleString();
