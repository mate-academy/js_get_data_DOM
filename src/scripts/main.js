'use strict';

const items = document.querySelectorAll('.population');
const numbers = [...items].map(item => +item.innerText.split(',').join(''));
const total = numbers.reduce((a, b) => a + b);
const avarage = total / numbers.length;

const totalResult = total.toLocaleString('en-US');

const avarageResult = avarage.toLocaleString('en-US');

const totalSpan = document.querySelector('.total-population');

totalSpan.innerText = totalResult;

const avarageSpan = document.querySelector('.average-population');

avarageSpan.innerText = avarageResult;
