'use strict';

const population = document.querySelectorAll('.population');

const num = [...population].map(elem => elem.innerText);
const numbers = num.map(el => +el.split(',').join(''));
const total = numbers.reduce((a, b) => a + b);
const average = total / numbers.length;

document.querySelector('.total-population').innerHTML
= total.toLocaleString('ja-JP');

document.querySelector('.average-population').innerHTML
= average.toLocaleString('ja-JP');
