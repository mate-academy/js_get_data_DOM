'use strict';

const list = document.querySelectorAll('.population');
const items = [...list].map(el => +el.innerText.split(',').join(''));

const total = items.reduce((prev, a) => prev + a, 0);

const totalNumbers = new Intl.NumberFormat('en-GB');
const totalString = totalNumbers.format(total);
const average = totalNumbers.format(total / items.length);

document.querySelector('.total-population').textContent
= totalString;

document.querySelector('.average-population').textContent
= average;
