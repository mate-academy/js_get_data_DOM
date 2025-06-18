'use strict';

const elements = [...document.querySelectorAll('.population')];

const populations = elements.map(element => +element.textContent.split(',').join(''));

const tot = populations.reduce((sum, element) => sum + element, 0);
const avg = Math.floor(tot / populations.length);
let total = tot.toLocaleString('en-US');
let average = avg.toLocaleString('en-US');

[...document.querySelectorAll('.total-population')][0].textContent = total;
[...document.querySelectorAll('.average-population')][0].textContent = average;

