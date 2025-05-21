'use strict';

const elements = [...document.querySelectorAll('.population')];
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const numbers = elements.map((el) => Number(el.textContent.replace(/,/g, '')));

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

const aver = Math.round(sum / numbers.length);

total.textContent = sum.toLocaleString();
average.textContent = aver.toLocaleString();
