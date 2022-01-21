'use strict';

const population = document.querySelectorAll('.population');

const texts = [...population].map(amount => amount.innerHTML);

const numbers = texts.map(x => +x.replace(/,/g, ''));

const totalAmount = numbers.reduce((sum, x) => sum + x, 0);

const totalToString = totalAmount.toLocaleString('en-US');

const averageToString = (totalAmount / numbers.length).toLocaleString('en-US');

const total = document.querySelector('.total-population');

const average = document.querySelector('.average-population');

total.textContent = totalToString;

average.textContent = averageToString;

// console.log(total, average);
