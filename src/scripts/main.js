'use strict';

const collection = document.querySelectorAll('span.population');
const numbers = [...collection].map(el => +el.innerText.split(',').join(''));

const total = numbers.reduce((prev, curr) => prev + curr);

const average = total / numbers.length;

document.querySelector('.total-population').innerText = total.toLocaleString();

document.querySelector('.average-population').innerText = average.toLocaleString();
