'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const avaragePopulation = document.querySelector('.average-population');
const totalPopulation = document.querySelector('.total-population');

const arr = [...population];
const result = arr.map((item) => parseInt(item.textContent.replace(/,/g, '')));

const total = result.reduce((acc, rec) => acc + rec, 0);
const avarage = total / result.length;

totalPopulation.textContent = total.toLocaleString('en-US');
avaragePopulation.textContent = avarage.toLocaleString('en-US');
