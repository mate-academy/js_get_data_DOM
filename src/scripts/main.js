'use strict';

const list = document.querySelectorAll('span');
const totPop = document.querySelector('[class="total-population"]');
const totAvr = document.querySelector('[class="average-population"]');

const amounts = [...list].map(num => num.innerText).slice(0, -2);
const numbers = amounts.map(i => Number(i.split(',').join('')));
const sum = numbers.reduce((a, b) => a + b);
const aver = sum / numbers.length;

totPop.textContent = Intl.NumberFormat().format(sum);
totAvr.textContent = Intl.NumberFormat().format(aver);
