'use strict';

const keys = document.querySelectorAll('.population');

const arr = [...keys].map(elem => +elem.innerText.split(',').join(''));

const total = document.querySelector('.total-population');

const result1 = arr.reduce((a, b) => a + b, 0);

const average = document.querySelector('.average-population');

const result2 = result1 / arr.length;

total.innerText = result1.toLocaleString('en-US');

average.innerText = result2.toLocaleString('en-US');
