'use strict';

const items = document.querySelectorAll('.population');
const numbers = [...items].map(item => +item.innerText.split(',').join(''));
const total = numbers.reduce((a, b) => a + b);
const avarage = total / numbers.length;

const totalStr = total.toString().split('');

totalStr.splice(-3, 0, ',');
totalStr.splice(-7, 0, ',');
totalStr.splice(-11, 0, ',');

const totalResult = totalStr.join('');

const avarageStr = avarage.toString().split('');

avarageStr.splice(-3, 0, ',');
avarageStr.splice(-7, 0, ',');

const avarageResult = avarageStr.join('');

const totalSpan = document.querySelector('.total-population');

totalSpan.innerText = totalResult;

const avarageSpan = document.querySelector('.average-population');

avarageSpan.innerText = avarageResult;
