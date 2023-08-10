'use strict';

const list = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const arr = [ ...list ].map(n => +n.textContent.replace(/,/g, ''));

const totalValue = arr.reduce((acc, cur) => acc + cur, 0);
const averageValue = totalValue / arr.length;

total.textContent = totalValue.toLocaleString('en-US');
average.textContent = averageValue.toLocaleString('en-US');
