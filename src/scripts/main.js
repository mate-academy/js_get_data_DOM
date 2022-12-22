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

const numbersArr = [];

numbersStr.split(' ').forEach(value => numbersArr.push(+value));

elementTotal.innerHTML = `
<p class="total">Total:
  ${(numbersArr.reduce((x, y) => x + y)).toLocaleString('en-US')}</p>
`;

elementAverage.innerHTML = `
<p class="average">Average: 
  ${(numbersArr.reduce((x, y) => Math.round((x + y) / numbersArr.length)))
    .toLocaleString('en-US')}</p>
`;
