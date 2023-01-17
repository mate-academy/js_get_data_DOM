'use strict';

const population = document.querySelectorAll('.population');

const populationArrow = [...population].map(item => item.innerText);

const arrow = populationArrow.map(string => +string.split(',').join(''));

let total = arrow.reduce((sum, number) => sum + number, 0);

let average = total / arrow.length;

total = total.toLocaleString('en');
average = average.toLocaleString('en');

const totalSpan = document.querySelector('.total-population');

totalSpan.innerText = total;

const averageSpan = document.querySelector('.average-population');

averageSpan.innerText = average;
