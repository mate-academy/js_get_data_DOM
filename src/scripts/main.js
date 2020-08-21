'use strict';

// write your code here
const population = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const arrayPop = [...population].map(x => +x.textContent.split(',').join(''));
const totalResult = arrayPop.reduce((x, y) => x + y);
const averageResult = totalResult / arrayPop.length;

average.textContent = averageResult.toLocaleString().replace(/\s/g, ',');
total.textContent = totalResult.toLocaleString().replace(/\s/g, ',');
