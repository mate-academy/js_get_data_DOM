'use strict';

const values = document.querySelectorAll('.population');
const numbers = [...values].map(value => +value.innerText.split(',').join(''));

const totalValue = numbers.reduce((prev, next) => prev + next, 0);
const averageValue = totalValue / numbers.length;

const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

total.textContent = totalValue.toLocaleString('en-US');
average.textContent = averageValue.toLocaleString('en-US');
