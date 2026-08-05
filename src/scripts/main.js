'use strict';

const elements = document.querySelectorAll('.population');
const texts = [...elements].map((el) => el.textContent);
const numbers = texts.map((text) => parseFloat(text.replace(/,/g, '')));
const total = numbers.reduce((sum, num) => sum + num, 0);
const average = total / numbers.length;
const formattedTotal = total.toLocaleString();
const formattedAvg = average.toLocaleString();

const resultTotal = document.querySelector('.total-population');
const resultAvg = document.querySelector('.average-population');

resultTotal.textContent = formattedTotal;

resultAvg.textContent = formattedAvg;
