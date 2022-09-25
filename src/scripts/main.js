'use strict';

const list = document.querySelectorAll('.population');
const items = [...list].map(el => +el.innerText.split(',').join(''));

const total = items.reduce((prev, a) => prev + a, 0);
const average = total / items.length;

const totalArray = total.toString().split('');
const averageArray = average.toString().split('');

const totalSeparated = (+totalArray.join('')).toLocaleString();
const averageSeparated = (+averageArray.join('')).toLocaleString();

document.querySelector('.total-population').textContent
= totalSeparated;

document.querySelector('.average-population').textContent
= averageSeparated;
