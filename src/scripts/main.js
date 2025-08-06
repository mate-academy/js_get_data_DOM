'use strict';

const allSpans = [...document.querySelectorAll('.population')];
const populations = allSpans.map((item) => +item.innerHTML.split(',').join(''));
const total = populations.reduce((sum, num) => sum + num, 0);
const average = Math.round(total / populations.length);

const elementTotal = document.querySelector('.total-population');
const elementAverage = document.querySelector('.average-population');

elementTotal.innerHTML = total.toLocaleString('en-US');
elementAverage.innerHTML = average.toLocaleString('en-US');
