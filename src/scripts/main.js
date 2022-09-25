'use strict';

const list = document.querySelectorAll('.population');
const items = [...list].map(el => +el.innerText.split(',').join(''));

const total = items.reduce((prev, a) => prev + a, 0);
const totalString = total.toLocaleString();
const average = (total / items.length).toLocaleString();

document.querySelector('.total-population').textContent
= totalString;

document.querySelector('.average-population').textContent
= average;
