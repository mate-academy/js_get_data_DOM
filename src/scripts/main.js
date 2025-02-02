/* eslint-disable prettier/prettier */
'use strict';

const allPopulation = document.querySelectorAll('.population');
// eslint-disable-next-line max-len
const popuations = Array.from(allPopulation).map((el) => Number(el.textContent.replace(/,/g, '')));

const total = popuations.reduce((a, b) => a + b, 0);
const average = Math.round(total / popuations.length);

const formatNum = (num) => num.toLocaleString();

document.querySelector('.total-population').textContent = formatNum(total);
document.querySelector('.average-population').textContent = formatNum(average);
