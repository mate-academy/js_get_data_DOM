'use strict';

const population = document.querySelectorAll('.population');
const value = [...population].map(item => +item.innerText.split(',').join(''));

const total = value.reduce((prev, x) => prev + x, 0);
const average = total / value.length;

const averageRes = document.querySelector(`.average-population`);
const totalRes = document.querySelector(`.total-population`);

averageRes.innerHTML = average;
totalRes.innerHTML = total;
