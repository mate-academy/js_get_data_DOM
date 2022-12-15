'use strict';

const element = document.querySelectorAll('.population');
const elementTotal = document.querySelector('.total');
const elementAverage = document.querySelector('.average');
const text = [...element].map(item => item.innerText);
let numbersStr = '';
const convertString = text.join(' ');

for (let i = 0; i < convertString.length; i++) {
  numbersStr += convertString[i].replace(',', '');
}

const arr = numbersStr.split(' ');
const numbersArr = [];

for (let i = 0; i < arr.length; i++) {
  numbersArr.push(+arr[i]);
}

const total = numbersArr.reduce((x, y) => {
  return x + y;
}, 0);

const average = numbersArr.reduce((x, y) => {
  return Math.round((x + y) / numbersArr.length);
}, 0);

elementTotal.innerHTML = `
<p class="total">Total: ${total.toLocaleString('en-US')}</p>
`;

elementAverage.innerHTML = `
<p class="average">Average: ${average.toLocaleString('en-US')}</p>
`;
