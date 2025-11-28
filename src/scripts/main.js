'use strict';

const population = document.querySelectorAll('.population');
const totalSpan = document.querySelector('.total-population');
const avarageSpan = document.querySelector('.average-population');
let populationNum = Array.from(population).map((span) => span.textContent);

populationNum = populationNum.map((num) => Number(num.replace(/,/g, '')));

let total = populationNum.reduce((sum, a) => sum + a, 0);
let avarage = total / populationNum.length;

total = total.toLocaleString('en-US');
avarage = avarage.toLocaleString('en-US');
totalSpan.textContent = total;
avarageSpan.textContent = avarage;
