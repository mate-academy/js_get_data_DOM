'use strict';

// write your code here


const [...ppl] = document.querySelectorAll('.population');
const total = document.querySelector('.total-population');
const average = document.querySelector('.average-population');

const totalPpl = [...ppl]
.map(el => Number(el.textContent.split(',').join('')))
.reduce((sum, elem) => sum + elem);

const avgPpl = totalPpl / ppl.length;

total.textContent = totalPpl.toLocaleString();
average.textContent = avgPpl.toLocaleString();
